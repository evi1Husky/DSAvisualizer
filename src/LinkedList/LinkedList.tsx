import { useState, useRef } from 'react'
import { LinkedListRenderer } from './LinkedListRenderer'
import { LinkedListControls } from './LinkedListControls'
import css from './linkedList.module.css'
import { BackButton } from '../BackButton/BackButton'
import { ImplementationButton } from '../ImplementationButton/ImplementationButton'

interface Node {
  item: unknown
  next: Node | null
}

const makeNode = (item: unknown, next: Node | null): Node => ({
  item,
  next,
})

export const LinkedList = () => {
  const head = useRef<Node | null>(null)
  const [length, setLength] = useState(0)
  const selectedNode = useRef('')

  const addFirstNode = (item: unknown) => {
    head.current = makeNode(item, head.current)
    setLength(length + 1)
  }

  const append = (item: unknown) => {
    if (head.current === null) {
      addFirstNode(item)
    } else {
      let node = head.current
      while (node.next != null) {
        node = node.next
      }
      node.next = makeNode(item, null)
      setLength(length + 1)
    }
  }

  const prepend = (item: unknown) => {
    if (head.current === null) {
      addFirstNode(item)
    } else {
      const node = makeNode(item, null)
      node.next = head.current
      head.current = node
      setLength(length + 1)
    }
  }

  const insertAfter = (key: string, item: unknown) => {
    let node = head.current
    while ((node != null) && (node.item != key)) { node = node.next }
    if (node != null) {
      node.next = makeNode(item, node.next)
      setLength(length + 1)
    }
  }

  const insertBefore = (key: string, item: unknown) => {
    if (head.current === null) { return }
    if (head.current.item == key) {
      prepend(item)
      return
    }
    let previous: Node | null = null
    let node: Node | null = head.current
    while ((node != null) && (node.item != key)) {
      previous = node
      node = node.next
    }
    if (node != null) {
      previous!.next = makeNode(item, node)
      setLength(length + 1)
    }
  }

  const removeFirst = () => {
    if (head.current) {
      head.current = head.current.next
      setLength(length - 1)
    }
  }

  const removeLast = () => {
    if (head.current) {
      if (!head.current.next) {
        removeFirst()
        return
      }
      let node = head.current
      while (node.next != null) {
        if (!node.next.next) {
          node.next = null
          setLength(length - 1)
          return
        }
        node = node.next
      }
    }
  }

  const removeItem = (key: unknown) => {
    if (head.current) {
      let targetNode = head.current
      let nextNode = targetNode.next
      while (nextNode !== null && nextNode.item != key) {
        targetNode = nextNode
        nextNode = nextNode.next
      }
      if (head.current.item == key) {
        removeFirst()
      } else if (nextNode) {
        if (nextNode.item == key) {
          targetNode.next = nextNode.next
          setLength(length - 1)
        }
      }
    }
  }

  return (
    <main className={css['container']}>
      <BackButton link={'/'} className={css['backButton']} />
      <ImplementationButton link={'/LinkedList/Implementation'}/>
      <h1 className={css['title']} >Linked List</h1>
      <LinkedListControls
        append={append}
        insertAfter={insertAfter}
        selectedNode={selectedNode}
        insertBefore={insertBefore}
        removeFirst={removeFirst}
        removeLast={removeLast}
        prepend={prepend}
        removeItem={removeItem}
        length={length} />
      <LinkedListRenderer
        linkedList={head.current}
        length={length}
        selectedNode={selectedNode} />
    </main>
  )
}
