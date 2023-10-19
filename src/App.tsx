import css from './css/app.module.css'
import { DSAselectButton } from './DSAselectButton/DSAselectButton'

export const App = () => {
  return (
    <main className={css['container']}>
      <h1 className={css['title']}>Data Structure Visualiser</h1>
      <DSAselectButton link='LinkedList' DSAname='Linked List'/>
    </main>
  )
}
