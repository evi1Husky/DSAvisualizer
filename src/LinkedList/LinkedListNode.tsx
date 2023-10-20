import css from "./linkedList.module.css";

interface LinkedListNodeProps {
  node: NodeToRender;
  selectedNode: React.MutableRefObject<string>;
}

interface NodeToRender {
  head: boolean;
  item: any;
  next: any;
}

export const LinkedListNode: React.FC<LinkedListNodeProps> = ({
  node,
  selectedNode,
}) => {
  const nodeClick = (node: NodeToRender) => {
    selectedNode.current = node.item;
  };

  let link: JSX.Element | null = <div className={css["link"]} />;
  let link2: JSX.Element | null = <div className={css["link2"]} />;
  let link3: JSX.Element | null = <div className={css["link3"]} />;

  if (node.head && node.next === "undefined") {
    link = link2 = null;
  } else if (node.head) {
    link2 = null;
  } else if (node.next === "undefined") {
    link = link3;
  }

  let nextNode: string;

  if (node.next === "undefined") {
    nextNode = "null";
  } else {
    nextNode = node.next;
  }

  return (
    <div
      className={css["node"]}
      data-value={node.item}
      tabIndex={1}
      onClick={() => {
        nodeClick(node);
      }}
    >
      <div className={css["valueContainer"]}>
        <p className={css["label"]}>data:</p>
        <p className={css["value"]}>{node.item}</p>
      </div>
      <div className={`${css["valueContainerNext"]}`}>
        <p className={css["label"]}>next:</p>
        <p className={css["value"]}>{nextNode}</p>
        {link}
        {link2}
      </div>
    </div>
  );
};
