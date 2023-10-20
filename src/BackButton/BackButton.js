"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackButton = void 0;
const react_router_dom_1 = require("react-router-dom");
const backButton_module_css_1 = __importDefault(require("./backButton.module.css"));
const BackButton = ({ link, className }) => {
    return (<react_router_dom_1.Link className={`${backButton_module_css_1.default['backButton']} ${className}`} to={link}>&#x2190;</react_router_dom_1.Link>);
};
exports.BackButton = BackButton;
