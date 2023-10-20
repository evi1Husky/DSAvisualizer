"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListRenderer = void 0;
const linkedList_module_css_1 = __importDefault(require("./linkedList.module.css"));
const LinkedListNode_tsx_1 = require("./LinkedListNode.tsx");
const utility_ts_1 = require("../utility.ts");
const makeNodeArray = (node, n, arr) => {
    var _a;
    if (n === 0) {
        return arr;
    }
    else {
        let nodeToRender = {
            head: false,
            item: String(node.item),
            next: String((_a = node.next) === null || _a === void 0 ? void 0 : _a.item),
        };
        arr.length === 0 ? nodeToRender.head = true : null;
        arr.push(nodeToRender);
        return makeNodeArray(node.next, n -= 1, arr);
    }
};
const LinkedListRenderer = ({ linkedList, length, selectedNode }) => {
    let nodes = makeNodeArray(linkedList, length, []);
    return (<div className={linkedList_module_css_1.default['array']} id='listContainer'>
        {nodes.map((node) => {
            return <LinkedListNode_tsx_1.LinkedListNode key={(0, utility_ts_1.randomKey)(5)} node={node} selectedNode={selectedNode}/>;
        })}
      </div>);
};
exports.LinkedListRenderer = LinkedListRenderer;
