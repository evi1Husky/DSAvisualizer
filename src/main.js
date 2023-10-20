"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const LinkedList_1 = require("./LinkedList/LinkedList");
const ImplementationLinkedList_1 = require("./LinkedList/ImplementationLinkedList");
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <App_1.App />,
    },
    {
        path: "/LinkedList",
        element: <LinkedList_1.LinkedList />,
    },
    {
        path: "/LinkedList/Implementation",
        element: <ImplementationLinkedList_1.ImplementationLinkedList />,
    }
], { basename: "/" });
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_router_dom_1.RouterProvider router={router}/>
  </react_1.default.StrictMode>);
