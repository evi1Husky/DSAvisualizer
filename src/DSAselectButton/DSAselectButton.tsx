import css from './DSAselectButton.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface DSAselectButtonProps {
  link: string
  DSAname: string
}

export const DSAselectButton: React.FC<DSAselectButtonProps> = ({ link, DSAname }) => {

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
    <div className={buttonStyle}
      onMouseOver={onOver}
      onMouseLeave={onLeave}
      onTouchStart={onOver}
      onTouchEnd={onLeave}
    >
      <Link className={css['dsaButton']} to={link}>{DSAname}</Link>
      <div className={underline} />
    </div>
  )
}