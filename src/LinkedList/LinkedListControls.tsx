import css from './styles/functionButtons.module.css'

interface LinkedListControlsProps {
  nodeValue: number
  setNodeValue: (num: number) => void
  removeFirst: () => void
  removeLast: () => void
  append: (nodeValue: number) => void
  prepend: (nodeValue: number) => void
  insertAfter: (key: number, nodeValue: number) => void
  insertBefore: (key: number, nodeValue: number) => void
}

export const LinkedListControls: React.FC<LinkedListControlsProps> = ({
  nodeValue,
  setNodeValue,
  append,
  insertAfter,
  insertBefore,
  prepend,
  removeFirst,
  removeLast }) => {

  const randomItem = Math.floor(Math.random() * 11)

  const appendButton = () => {
    setNodeValue(randomItem)
    append(nodeValue)
  }

  const prependButton = () => {
    setNodeValue(randomItem)
    prepend(nodeValue)
  }

  const insertAfterButton = () => {
    setNodeValue(randomItem)
    insertAfter(nodeValue, randomItem)
  }

  const insertBeforeButton = () => {
    setNodeValue(randomItem)
    insertBefore(nodeValue, randomItem)
  }

  return (
    <div className={css['buttonContainer']}>
      <button className={css['button']} onClick={appendButton}>
        append({nodeValue})</button>
      <button className={css['button']} onClick={prependButton}>
        prepend({nodeValue})</button>
      <button className={css['button']} onClick={insertBeforeButton}>
        insertBefore({nodeValue}, {randomItem}) </button>
      <button className={css['button']} onClick={insertAfterButton}>
        insertAfter({nodeValue}, {randomItem}) </button>
      <button className={css['button']} onClick={removeFirst}>
        removeFirst( )</button>
      <button className={css['button']} onClick={removeLast}>
        removeLast( )</button>
    </div>
  )
}
