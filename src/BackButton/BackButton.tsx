import { Link } from 'react-router-dom'
import css from './backButton.module.css'

interface BackButtonProps {
  link: string
  className: string | undefined
}

export const BackButton: React.FC<BackButtonProps> = ({ link, className }) => {
  return (
    <Link className={`${css['backButton']} ${className}`} to={link}>&#x2190;</Link>
  )
}
