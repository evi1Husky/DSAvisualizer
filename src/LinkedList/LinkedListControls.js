"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListControls = void 0;
const buttons_module_css_1 = __importDefault(require("./buttons.module.css"));
const AnimatedList_tsx_1 = __importDefault(require("../listAnimation/AnimatedList.tsx"));
const react_1 = require("react");
const utility_ts_1 = require("../utility.ts");
AnimatedList_tsx_1.default.setListContainerID('listContainer');
const LinkedListControls = ({ length, selectedNode, append, insertAfter, insertBefore, prepend, removeFirst, removeLast, removeItem }) => {
    const [appendBtn, getAppendBtn] = (0, react_1.useState)(null);
    const [nodeCount, setNodeCount] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (nodeCount < 20) {
            AnimatedList_tsx_1.default.setListSize(length);
            getAppendBtn(document.getElementById('append'));
            appendBtn === null || appendBtn === void 0 ? void 0 : appendBtn.click();
            setTimeout(() => {
                setNodeCount(nodeCount + 1);
            }, nodeCount * 1.7);
        }
    }, [appendBtn, nodeCount]);
    let clicked = (0, react_1.useRef)(false);
    const clearButton = (length) => {
        if (length > 0) {
            if (!clicked.current) {
                clicked.current = true;
                const removeLast = document.querySelector('#removeLast');
                let len = length;
                const interval = setInterval(() => {
                    removeLast === null || removeLast === void 0 ? void 0 : removeLast.click();
                    len -= 1;
                    if (len === 0) {
                        clicked.current = false;
                        clearInterval(interval);
                    }
                }, 150);
            }
        }
    };
    selectedNode.current = '';
    return (<div className={buttons_module_css_1.default['buttonContainer']}>

      <button className={buttons_module_css_1.default['button']} id={'append'} onClick={() => {
            AnimatedList_tsx_1.default.animate(append, 'last', 'popUp', (0, utility_ts_1.randomNumber)(9));
        }}>append( )</button>

      <button className={buttons_module_css_1.default['button']} onClick={() => {
            AnimatedList_tsx_1.default.animate(prepend, 'first', 'popUp', (0, utility_ts_1.randomNumber)(9));
        }}>prepend( )</button>

      <button className={buttons_module_css_1.default['button']} onClick={() => {
            if (selectedNode.current) {
                AnimatedList_tsx_1.default.animate(insertBefore, selectedNode.current, 'popUp', (0, utility_ts_1.randomNumber)(9));
            }
        }}>insertBefore( ) </button>

      <button className={buttons_module_css_1.default['button']} onClick={() => {
            if (selectedNode.current) {
                AnimatedList_tsx_1.default.animate(insertAfter, selectedNode.current, 'popUp', (0, utility_ts_1.randomNumber)(9), true);
            }
        }}>insertAfter( ) </button>

      <button className={buttons_module_css_1.default['button']} onClick={() => {
            AnimatedList_tsx_1.default.animate(removeFirst, 'first', 'shrink');
        }}>removeFirst( )</button>

      <button className={buttons_module_css_1.default['button']} id={'removeLast'} onClick={() => {
            AnimatedList_tsx_1.default.animate(removeLast, 'last', 'shrink');
        }}>removeLast( )</button>

      <button className={buttons_module_css_1.default['button']} onClick={() => {
            if (selectedNode.current) {
                AnimatedList_tsx_1.default.animate(removeItem, selectedNode.current, 'shrink');
            }
        }}>removeItem( )</button>

      <button className={buttons_module_css_1.default['button']} id={'clear'} onClick={() => { clearButton(length); }}>clear</button>
    </div>);
};
exports.LinkedListControls = LinkedListControls;
