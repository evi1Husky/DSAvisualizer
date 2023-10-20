"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSideBar = void 0;
const articleSideBar_module_css_1 = __importDefault(require("./articleSideBar.module.css"));
const react_1 = require("react");
const ArticleSideBar = ({ className, articleLinks }) => {
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const sideBarLinks = (0, react_1.useRef)([]);
    const observer = (0, react_1.useRef)();
    (0, react_1.useLayoutEffect)(() => {
        setLoaded(true);
        if (window.innerWidth >= 1000) {
            const observerCallback = (entries, sideBarLinks) => {
                var _a;
                for (const link of sideBarLinks) {
                    link.style.color = 'var(--white)';
                    link.style.backgroundColor = '';
                }
                for (const link of sideBarLinks) {
                    if (link.innerHTML === ((_a = entries[0]) === null || _a === void 0 ? void 0 : _a.target.id)) {
                        link.style.color = 'var(--linkHighLightText)';
                        link.style.backgroundColor = 'var(--linkHighLight)';
                    }
                }
            };
            observer.current = new IntersectionObserver((entries) => { observerCallback(entries, sideBarLinks.current); }, {
                rootMargin: '0% 0% -80% 0%',
                threshold: 0.9
            });
            articleLinks.current.forEach(link => {
                var _a;
                (_a = observer.current) === null || _a === void 0 ? void 0 : _a.observe(link);
            });
            return () => {
                var _a;
                (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect;
            };
        }
        else {
            return;
        }
    }, [observer]);
    return (<nav className={`${articleSideBar_module_css_1.default['container']}`}>
        <h1 className={`${articleSideBar_module_css_1.default['inThisArticle']}`}>In this article</h1>
        <ul className={`${articleSideBar_module_css_1.default['sideBar']}`}>
          {articleLinks.current.map((item, index) => (<li key={`${index}`}>
              <a className={articleSideBar_module_css_1.default['link']} href={item.href} ref={(element) => { sideBarLinks.current[index] = element; }}>{item.id}</a>
            </li>))}
        </ul>
      </nav>);
};
exports.ArticleSideBar = ArticleSideBar;
