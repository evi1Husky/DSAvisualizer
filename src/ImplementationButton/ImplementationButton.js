"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementationButton = void 0;
const implementationButton_module_css_1 = __importDefault(require("./implementationButton.module.css"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const ImplementationButton = ({ link }) => {
    const [underline, setUnderline] = (0, react_1.useState)('');
    const [buttonStyle, setButtonStyle] = (0, react_1.useState)(`${implementationButton_module_css_1.default['implementationButtonContainer']}`);
    const onOver = () => {
        setUnderline(`${implementationButton_module_css_1.default['underline']}`);
        setButtonStyle(`${implementationButton_module_css_1.default['implementationButtonContainer']} ${implementationButton_module_css_1.default['hovered']}`);
    };
    const onLeave = () => {
        setUnderline(`${implementationButton_module_css_1.default['underlineOut']}`);
        setButtonStyle(`${implementationButton_module_css_1.default['implementationButtonContainer']}`);
    };
    return (<div className={buttonStyle} id={implementationButton_module_css_1.default['implementationButtonContainer']} onMouseOver={onOver} onMouseLeave={onLeave} onTouchStart={onOver} onTouchEnd={onLeave}>
      <react_router_dom_1.Link className={implementationButton_module_css_1.default['implementationButton']} to={link}>Implementation</react_router_dom_1.Link>
      <div className={underline}/>
    </div>);
};
exports.ImplementationButton = ImplementationButton;
