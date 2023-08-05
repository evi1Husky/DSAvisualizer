import css from './articleSideBar.module.css'

interface ArticleSideBarProps {
  className?: string | undefined
  anchorLinks: string[]
}

export const ArticleSideBar: React.FC<ArticleSideBarProps> =
  ({ className, anchorLinks }) => {
    console.log(anchorLinks)
    return (
      <nav className={`${css['container']}`}>
        <h1 className={`${css['inThisArticle']}`}>In this article</h1>
        <ul className={`${css['sideBar']}`}>
          {...anchorLinks.map(item => (
            <li>
              <a className={css['link']} href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
