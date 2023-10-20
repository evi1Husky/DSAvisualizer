"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const react_1 = require("react");
const LinkedListRenderer_1 = require("./LinkedListRenderer");
const LinkedListControls_1 = require("./LinkedListControls");
const linkedList_module_css_1 = __importDefault(require("./linkedList.module.css"));
const BackButton_1 = require("../BackButton/BackButton");
const ImplementationButton_1 = require("../ImplementationButton/ImplementationButton");
const makeNode = (item, next) => ({
    item,
    next,
});
const LinkedList = () => {
    const head = (0, react_1.useRef)(null);
    const [length, setLength] = (0, react_1.useState)(0);
    const selectedNode = (0, react_1.useRef)('');
    const addFirstNode = (item) => {
        head.current = makeNode(item, head.current);
        setLength(length + 1);
    };
    const append = (item) => {
        if (head.current === null) {
            addFirstNode(item);
        }
        else {
            let node = head.current;
            while (node.next != null) {
                node = node.next;
            }
            node.next = makeNode(item, null);
            setLength(length + 1);
        }
    };
    const prepend = (item) => {
        if (head.current === null) {
            addFirstNode(item);
        }
        else {
            const node = makeNode(item, null);
            node.next = head.current;
            head.current = node;
            setLength(length + 1);
        }
    };
    const insertAfter = (key, item) => {
        let node = head.current;
        while ((node != null) && (node.item != key)) {
            node = node.next;
        }
        if (node != null) {
            node.next = makeNode(item, node.next);
            setLength(length + 1);
        }
    };
    const insertBefore = (key, item) => {
        if (head.current === null) {
            return;
        }
        if (head.current.item == key) {
            prepend(item);
            return;
        }
        let previous = null;
        let node = head.current;
        while ((node != null) && (node.item != key)) {
            previous = node;
            node = node.next;
        }
        if (node != null) {
            previous.next = makeNode(item, node);
            setLength(length + 1);
        }
    };
    const removeFirst = () => {
        if (head.current) {
            head.current = head.current.next;
            setLength(length - 1);
        }
    };
    const removeLast = () => {
        if (head.current) {
            if (!head.current.next) {
                removeFirst();
                return;
            }
            let node = head.current;
            while (node.next != null) {
                if (!node.next.next) {
                    node.next = null;
                    setLength(length - 1);
                    return;
                }
                node = node.next;
            }
        }
    };
    const removeItem = (key) => {
        if (head.current) {
            let targetNode = head.current;
            let nextNode = targetNode.next;
            while (nextNode !== null && nextNode.item != key) {
                targetNode = nextNode;
                nextNode = nextNode.next;
            }
            if (head.current.item == key) {
                removeFirst();
            }
            else if (nextNode) {
                if (nextNode.item == key) {
                    targetNode.next = nextNode.next;
                    setLength(length - 1);
                }
            }
        }
    };
    return (<main className={linkedList_module_css_1.default['container']}>
      <BackButton_1.BackButton link={'/'} className={linkedList_module_css_1.default['backButton']}/>
      <ImplementationButton_1.ImplementationButton link={'/LinkedList/Implementation'}/>
      <h1 className={linkedList_module_css_1.default['title']}>Linked List</h1>
      <LinkedListControls_1.LinkedListControls append={append} insertAfter={insertAfter} selectedNode={selectedNode} insertBefore={insertBefore} removeFirst={removeFirst} removeLast={removeLast} prepend={prepend} removeItem={removeItem} length={length}/>
      <LinkedListRenderer_1.LinkedListRenderer linkedList={head.current} length={length} selectedNode={selectedNode}/>
    </main>);
};
exports.LinkedList = LinkedList;
