import { Link } from 'react-router-dom'
import css from './css/app.module.css'
import { useState } from "react"

export const App = () => {
  const [underline, setUnderline] = useState('')
  const [buttonStyle, setButtonStyle] = useState(`${css['buttonContainer']}`)

  const onOver = () => {
    setUnderline(`${css['underline']}`)
    setButtonStyle(`${css['buttonContainer']} ${css['hovered']}`)
  }

  const onLeave = () => {
    setUnderline(`${css['underlineOut']}`)
    setButtonStyle(`${css['buttonContainer']}`)
  }

  return (
    <main className={css['container']}>
      <h1 className={css['title']}>Data Structure Visualiser</h1>
      <div className={buttonStyle}
        onMouseOver={onOver}
        onMouseLeave={onLeave}
        onTouchStart={onOver}
        onTouchEnd={onLeave}
        >
        <Link className={css['dsaButton']} to={'LinkedList'}>Linked List</Link>
        <div className={underline}/>
      </div>
    </main>
  )
}
