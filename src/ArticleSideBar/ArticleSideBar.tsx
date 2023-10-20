import css from "./articleSideBar.module.css";
import { useRef, useState, useLayoutEffect } from "react";

interface ArticleSideBarProps {
  className?: string | undefined;
  articleLinks: React.MutableRefObject<HTMLAnchorElement[]>;
}

export const ArticleSideBar: React.FC<ArticleSideBarProps> = ({
  className,
  articleLinks,
}) => {
  const [loaded, setLoaded] = useState(false);
  const sideBarLinks = useRef<HTMLAnchorElement[]>([]);
  const observer = useRef<IntersectionObserver>();

  useLayoutEffect(() => {
    setLoaded(true);
    if (window.innerWidth >= 1000) {
      const observerCallback = (
        entries: IntersectionObserverEntry[],
        sideBarLinks: HTMLAnchorElement[]
      ) => {
        for (const link of sideBarLinks) {
          link.style.color = "var(--white)";
          link.style.backgroundColor = "";
        }
        for (const link of sideBarLinks) {
          if (link.innerHTML === entries[0]?.target.id) {
            link.style.color = "var(--linkHighLightText)";
            link.style.backgroundColor = "var(--linkHighLight)";
          }
        }
      };

      observer.current = new IntersectionObserver(
        (entries) => {
          observerCallback(entries, sideBarLinks.current);
        },
        {
          rootMargin: "0% 0% -80% 0%",
          threshold: 0.9,
        }
      );

      articleLinks.current.forEach((link) => {
        observer.current?.observe(link);
      });
      return () => {
        observer.current?.disconnect;
      };
    } else {
      return;
    }
  }, [observer]);

  return (
    <nav className={`${css["container"]}`}>
      <h1 className={`${css["inThisArticle"]}`}>In this article</h1>
      <ul className={`${css["sideBar"]}`}>
        {articleLinks.current.map((item, index) => (
          <li key={`${index}`}>
            <a
              className={css["link"]}
              href={item.href}
              ref={(element) => {
                sideBarLinks.current[index] = element as HTMLAnchorElement;
              }}
            >
              {item.id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
