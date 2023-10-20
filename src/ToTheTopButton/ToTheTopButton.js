"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheTopButton = void 0;
const toTheTopButton_module_css_1 = __importDefault(require("./toTheTopButton.module.css"));
const react_1 = require("react");
const ToTheTopButton = ({ className, IDofElementToObserve, link }) => {
    const observer = (0, react_1.useRef)();
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const toTheTopButton = (0, react_1.useRef)();
    /*
      Use Intersection Observer to make toTheTopButton appear when
      scrolling past headline
    */
    const observerCallback = (0, react_1.useCallback)((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                toTheTopButton.current.style.display = 'none';
            }
            else {
                toTheTopButton.current.style.display = 'block';
            }
        });
    }, []);
    (0, react_1.useEffect)(() => {
        setLoaded(true);
        toTheTopButton.current =
            document.querySelector('#toTheTopButton');
        observer.current = new IntersectionObserver(observerCallback);
        observer.current.observe(document.querySelector(IDofElementToObserve));
        return () => {
            var _a;
            (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect;
        };
    }, [observer]);
    return (<a className={`${toTheTopButton_module_css_1.default['toTheTopButton']} ${className}`} href={link} id='toTheTopButton'>&#x2190;</a>);
};
exports.ToTheTopButton = ToTheTopButton;
