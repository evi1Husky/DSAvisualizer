"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const app_module_css_1 = __importDefault(require("./css/app.module.css"));
const DSAselectButton_1 = require("./DSAselectButton/DSAselectButton");
const App = () => {
    return (<main className={app_module_css_1.default['container']}>
      <h1 className={app_module_css_1.default['title']}>Data Structure Visualiser</h1>
      <DSAselectButton_1.DSAselectButton link='LinkedList' DSAname='Linked List'/>
    </main>);
};
exports.App = App;
