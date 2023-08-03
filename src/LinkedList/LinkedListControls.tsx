import css from './styles/functionButtons.module.css'
import { useEffect, useState } from 'react'
import { randomNumber } from '../utility.ts'

interface LinkedListControlsProps {
  nodeValue: number
  setNodeValue: (num: number) => void
  removeFirst: () => void
  removeLast: () => void
  removeItem: (key: unknown) => void
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
  removeLast,
  removeItem }) => {

  const randomItem = randomNumber(9)

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

  const [appendBtn, getAppendBtn] = useState<HTMLElement | null | undefined>(null)

  const buildListOnPageLoad = (delay: number, nodeCount: number, button: HTMLElement) => {
    for (let i = 0; i < nodeCount; i++) {
      setTimeout(() => {
        button.click()
      }, delay)
      delay = delay * 1.7
    }
  }

  useEffect(() => {
    getAppendBtn(document.getElementById('append'))
    if (appendBtn) {
      setTimeout(() => {
        buildListOnPageLoad(23, 5, appendBtn)
      }, 0)
    }
  }, [appendBtn])

  return (
    <div className={css['buttonContainer']}>
      <button className={css['button']} id={'append'} onClick={appendButton}>
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
      <button className={css['button']} onClick={() => { removeItem(nodeValue) }}>
        removeItem({nodeValue})</button>
    </div>
  )
}
