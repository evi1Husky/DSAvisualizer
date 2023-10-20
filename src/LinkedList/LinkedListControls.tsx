import buttonCSS from "./buttons.module.css";
import AnimatedList from "../listAnimation/AnimatedList.tsx";
import { useEffect, useState, useRef } from "react";
import { randomNumber } from "../utility.ts";

AnimatedList.setListContainerID("listContainer");

interface LinkedListControlsProps {
  length: number;
  selectedNode: React.MutableRefObject<string>;
  removeFirst: () => void;
  removeLast: () => void;
  removeItem: (key: unknown) => void;
  append: (selectedNode: number) => void;
  prepend: (selectedNode: number) => void;
  insertAfter: (key: string, selectedNode: number) => void;
  insertBefore: (key: string, selectedNode: number) => void;
}

export const LinkedListControls: React.FC<LinkedListControlsProps> = ({
  length,
  selectedNode,
  append,
  insertAfter,
  insertBefore,
  prepend,
  removeFirst,
  removeLast,
  removeItem,
}) => {
  const [appendBtn, getAppendBtn] = useState<HTMLElement | null | undefined>(
    null
  );
  const [nodeCount, setNodeCount] = useState(0);

  useEffect(() => {
    if (nodeCount < 20) {
      AnimatedList.setListSize(length);
      getAppendBtn(document.getElementById("append"));
      appendBtn?.click();
      setTimeout(() => {
        setNodeCount(nodeCount + 1);
      }, nodeCount * 1.7);
    }
  }, [appendBtn, nodeCount]);

  let clicked = useRef(false);

  const clearButton = (length: number) => {
    if (length > 0) {
      if (!clicked.current) {
        clicked.current = true;
        const removeLast = document.querySelector(
          "#removeLast"
        ) as HTMLInputElement;
        let len = length;
        const interval = setInterval(() => {
          removeLast?.click();
          len -= 1;
          if (len === 0) {
            clicked.current = false;
            clearInterval(interval);
          }
        }, 150);
      }
    }
  };

  selectedNode.current = "";

  return (
    <div className={buttonCSS["buttonContainer"]}>
      <button
        className={buttonCSS["button"]}
        id={"append"}
        onClick={() => {
          AnimatedList.animate(append, "last", "popUp", randomNumber(9));
        }}
      >
        append( )
      </button>

      <button
        className={buttonCSS["button"]}
        onClick={() => {
          AnimatedList.animate(prepend, "first", "popUp", randomNumber(9));
        }}
      >
        prepend( )
      </button>

      <button
        className={buttonCSS["button"]}
        onClick={() => {
          if (selectedNode.current) {
            AnimatedList.animate(
              insertBefore,
              selectedNode.current,
              "popUp",
              randomNumber(9)
            );
          }
        }}
      >
        insertBefore( ){" "}
      </button>

      <button
        className={buttonCSS["button"]}
        onClick={() => {
          if (selectedNode.current) {
            AnimatedList.animate(
              insertAfter,
              selectedNode.current,
              "popUp",
              randomNumber(9),
              true
            );
          }
        }}
      >
        insertAfter( ){" "}
      </button>

      <button
        className={buttonCSS["button"]}
        onClick={() => {
          AnimatedList.animate(removeFirst, "first", "shrink");
        }}
      >
        removeFirst( )
      </button>

      <button
        className={buttonCSS["button"]}
        id={"removeLast"}
        onClick={() => {
          AnimatedList.animate(removeLast, "last", "shrink");
        }}
      >
        removeLast( )
      </button>

      <button
        className={buttonCSS["button"]}
        onClick={() => {
          if (selectedNode.current) {
            AnimatedList.animate(removeItem, selectedNode.current, "shrink");
          }
        }}
      >
        removeItem( )
      </button>

      <button
        className={buttonCSS["button"]}
        id={"clear"}
        onClick={() => {
          clearButton(length);
        }}
      >
        clear
      </button>
    </div>
  );
};
