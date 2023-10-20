"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListNode = void 0;
const linkedList_module_css_1 = __importDefault(require("./linkedList.module.css"));
const LinkedListNode = ({ node, selectedNode }) => {
    const nodeClick = (node) => {
        selectedNode.current = node.item;
    };
    let link = <div className={linkedList_module_css_1.default['link']}/>;
    let link2 = <div className={linkedList_module_css_1.default['link2']}/>;
    let link3 = <div className={linkedList_module_css_1.default['link3']}/>;
    if ((node.head) && (node.next === 'undefined')) {
        link = link2 = null;
    }
    else if (node.head) {
        link2 = null;
    }
    else if (node.next === 'undefined') {
        link = link3;
    }
    let nextNode;
    if (node.next === 'undefined') {
        nextNode = 'null';
    }
    else {
        nextNode = node.next;
    }
    return (<div className={linkedList_module_css_1.default['node']} data-value={node.item} tabIndex={1} onClick={() => { nodeClick(node); }}>
        <div className={linkedList_module_css_1.default['valueContainer']}>
          <p className={linkedList_module_css_1.default['label']}>data:</p>
          <p className={linkedList_module_css_1.default['value']}>{node.item}</p>
        </div>
        <div className={`${linkedList_module_css_1.default['valueContainerNext']}`}>
          <p className={linkedList_module_css_1.default['label']}>next:</p>
          <p className={linkedList_module_css_1.default['value']}>{nextNode}</p>
          {link}
          {link2}
        </div>
      </div>);
};
exports.LinkedListNode = LinkedListNode;
