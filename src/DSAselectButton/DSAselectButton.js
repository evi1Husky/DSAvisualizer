"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSAselectButton = void 0;
const DSAselectButton_module_css_1 = __importDefault(require("./DSAselectButton.module.css"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const DSAselectButton = ({ link, DSAname }) => {
    const [underline, setUnderline] = (0, react_1.useState)('');
    const [buttonStyle, setButtonStyle] = (0, react_1.useState)(`${DSAselectButton_module_css_1.default['buttonContainer']}`);
    const onOver = () => {
        setUnderline(`${DSAselectButton_module_css_1.default['underline']}`);
        setButtonStyle(`${DSAselectButton_module_css_1.default['buttonContainer']} ${DSAselectButton_module_css_1.default['hovered']}`);
    };
    const onLeave = () => {
        setUnderline(`${DSAselectButton_module_css_1.default['underlineOut']}`);
        setButtonStyle(`${DSAselectButton_module_css_1.default['buttonContainer']}`);
    };
    return (<div className={buttonStyle} onMouseOver={onOver} onMouseLeave={onLeave} onTouchStart={onOver} onTouchEnd={onLeave}>
      <react_router_dom_1.Link className={DSAselectButton_module_css_1.default['dsaButton']} to={link}>{DSAname}</react_router_dom_1.Link>
      <div className={underline}/>
    </div>);
};
exports.DSAselectButton = DSAselectButton;
