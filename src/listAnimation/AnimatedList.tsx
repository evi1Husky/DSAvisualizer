const AnimatedList = (() => {
  type Animations = "popUp" | "shrink" | "traverse";
  const animations = {
    popUp: [
      { transform: "scale(0.1)", offset: 0 },
      { transform: "scale(1.3)", offset: 0.5 },
      { transform: "scale(1)", offset: 1 },
    ],
    popUpOptions: { duration: 110, iterations: 1, delay: 0 },
    shrink: [
      { transform: "scale(1)", offset: 0 },
      { transform: "scale(1.3)", offset: 0.15 },
      { transform: "scale(1)", offset: 0.25 },
      { transform: "scale(0)", offset: 1 },
    ],
    shrinkOptions: { duration: 110, iterations: 1, delay: 0 },
    traverse: [
      { transform: "scale(1)", filter: "brightness(1.17)", offset: 0 },
      { transform: "scale(1.15)", offset: 0.15 },
      { transform: "scale(1)", filter: "brightness(1)", offset: 1 },
    ],
    traverseOptions: { duration: 110, iterations: 1, delay: 0 },
  };

  const setAnimation = (animationType: string, animationValue: any) => {
    switch (animationType) {
      case "popUp":
        animations.popUp = [...animationValue];
        break;
      case "popUpOptions":
        animations.popUpOptions = { ...animationValue };
        break;
      case "shrink":
        animations.shrink = [...animationValue];
        break;
      case "shrinkOptions":
        animations.shrinkOptions = { ...animationValue };
        break;
      case "traverse":
        animations.traverse = [...animationValue];
        break;
      case "traverseOptions":
        animations.traverseOptions = { ...animationValue };
        break;
      default:
        throw new Error(`Unsupported animation type: ${animationType}`);
    }
  };

  function getNodeList(listContainerID: string): Element[] {
    const listContainer = document.querySelector(`#${listContainerID}`);
    if (!listContainer) {
      throw new Error("cannot find list container");
    }
    return Array.from(listContainer?.children || []);
  }

  const getNode = (
    nodes: Element[],
    key: string,
    index?: number
  ): Element | null => {
    if (key === "first") {
      return nodes[0] as Element;
    } else if (key === "last") {
      return nodes[nodes.length - 1] as Element;
    }
    for (const [i, node] of nodes.entries()) {
      if (node.getAttribute("data-value") === key) {
        if (index) {
          if (i === index) {
            return node;
          } else {
            continue;
          }
        } else if (!index) {
          return node;
        }
      }
    }
    return null;
  };

  const animateNode = (
    nodeToAnimate: Element | null | undefined,
    animationType: Animations
  ): void => {
    if (!nodeToAnimate) {
      throw new Error("cannot find a node to animate");
    }

    switch (animationType) {
      case "popUp":
        nodeToAnimate.animate(animations.popUp, animations.popUpOptions);
        break;
      case "shrink":
        nodeToAnimate.animate(animations.shrink, animations.shrinkOptions);
        break;
      case "traverse":
        nodeToAnimate.animate(animations.traverse, animations.traverseOptions);
        break;
    }
  };

  const calculateDelayForTraversal = (
    nodes: Element[],
    animationDuration: number,
    selectedNode: string
  ): number => {
    const node = nodes.find(
      (node) => node.getAttribute("data-value") === selectedNode
    );
    const numberOfNodesToTraverse = node ? nodes.indexOf(node) : nodes.length;
    const delay = numberOfNodesToTraverse === 0 ? 0 : animationDuration + 50;
    return numberOfNodesToTraverse * animationDuration + delay;
  };

  const traverseNodesAnimation = (
    nodes: Element[],
    animationDuration: number,
    selectedNode: string,
    animateLastTraversedNode?: boolean
  ): number => {
    for (const [nodeIndex, node] of nodes.entries()) {
      if (node.getAttribute("data-value") === selectedNode) {
        if (animateLastTraversedNode) {
          setTimeout(() => {
            animateNode(node, "traverse");
          }, nodeIndex * animationDuration);
          return nodeIndex + 1;
        } else {
          return nodeIndex;
        }
      } else {
        setTimeout(() => {
          animateNode(node, "traverse");
        }, nodeIndex * animationDuration);
      }
    }
    return nodes.length;
  };

  /* 
   this variable is needed for camparing list sizes at different states 
   to prevent animations from being applied before the list has updated 
   */
  let listSize = 0;

  let listContainerID: string;

  const animate = (
    listMethod: Function,
    selectedNode: string,
    animationType: Animations,
    itemToInsert?: string,
    animateLastTraversedNode?: boolean
  ): void => {
    const startAnimation = (
      animationType: Animations,
      selectedNode: string,
      nodeIndexToAnimate?: number
    ): boolean => {
      const nodes = getNodeList(listContainerID);
      if (listSize != nodes.length) {
        return false;
      }
      const nodeToAnimate = getNode(nodes, selectedNode, nodeIndexToAnimate);
      if (!nodeToAnimate) {
        return false;
      }
      animateNode(nodeToAnimate, animationType);
      return true;
    };

    const popUp = () => {
      listMethod(itemToInsert);
      listSize += 1;
      const interval = setInterval(() => {
        let started = startAnimation(animationType, selectedNode);
        if (started) {
          clearInterval(interval);
        }
      }, 16.7);
    };

    const shrink = (): void => {
      const shrinkingDuration = animations.shrinkOptions.duration;
      startAnimation(animationType, selectedNode);
      setTimeout(() => {
        listMethod();
        listSize -= 1;
      }, shrinkingDuration);
    };

    const traverseShrink = (): void => {
      const shrinkingDuration = animations.shrinkOptions.duration;
      const traversingNodeDuration = animations.traverseOptions.duration;
      const nodes = getNodeList(listContainerID);
      traverseNodesAnimation(nodes, traversingNodeDuration, selectedNode);
      setTimeout(() => {
        startAnimation(animationType, selectedNode);
        setTimeout(() => {
          listMethod(selectedNode);
          listSize -= 1;
        }, shrinkingDuration);
      }, calculateDelayForTraversal(nodes, traversingNodeDuration, selectedNode));
    };

    const traversePopUp = (): void => {
      const traversingNodeDuration = animations.traverseOptions.duration;
      const nodes = getNodeList(listContainerID);
      const nodeIndexToAnimate = traverseNodesAnimation(
        nodes,
        traversingNodeDuration,
        selectedNode,
        animateLastTraversedNode
      );
      setTimeout(() => {
        listMethod(selectedNode, itemToInsert);
        listSize += 1;
        const interval = setInterval(() => {
          const started = startAnimation(
            "popUp",
            String(itemToInsert),
            nodeIndexToAnimate
          );
          if (started) {
            clearInterval(interval);
          }
        }, 16.7);
      }, calculateDelayForTraversal(nodes, traversingNodeDuration, selectedNode));
    };

    if (selectedNode === "last" || selectedNode === "first") {
      if (animationType === "popUp") {
        popUp();
      } else if (animationType === "shrink") {
        shrink();
      }
    } else {
      if (animationType === "shrink") {
        traverseShrink();
      } else if (animationType === "popUp") {
        traversePopUp();
      }
    }
  };

  return {
    animate,
    setAnimation,
    setListContainerID(value: string) {
      listContainerID = value;
    },
    setListSize(value: number) {
      listSize = value;
    },
  };
})();

export default AnimatedList;
