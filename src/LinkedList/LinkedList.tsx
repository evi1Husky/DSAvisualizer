import { useState } from "react"
import { LinkedListRenderer } from './LinkedListRenderer'
import { LinkedListControls } from './LinkedListControls'
import { randomNumber } from '../utility.ts'

interface Node {
  item: unknown
  next: Node | null
  new: boolean
}

const makeNode = (item: unknown, next: Node | null): Node => ({
  item,
  next,
  new: true
})

export const LinkedList = () => {
  const [head, setNode] = useState<Node | null>(null)
  const [length, setLength] = useState(0)
  const [nodeValue, newNodeValue] = useState<number>(randomNumber(9))

  const resetLabels = () => {
    if (head) {
      let node = head
      node.new = false
      while (node.next != null) {
        node = node.next
        node.new = false
      }
    }
  }

  const setNodeValue = (val: number) => {
    resetLabels()
    newNodeValue(val)
  }

  const addFirstNode = (item: unknown) => {
    setNode(makeNode(item, head))
    setLength(length + 1)
  }

  const addNode = (head: Node) => {
    setNode({ ...head })
    setLength(length + 1)
  }

  const append = (item: unknown) => {
    resetLabels()
    if (head === null) {
      addFirstNode(item)
    } else {
      let node = head
      while (node.next != null) {
        node = node.next
      }
      node.next = makeNode(item, null)
      setLength(length + 1)
    }
  }

  const prepend = (item: unknown) => {
    resetLabels()
    if (head === null) {
      addFirstNode(item)
    } else {
      const node = makeNode(item, null)
      node.next = head
      addNode(node)
    }
  }

  const insertAfter = (key: unknown, item: unknown) => {
    resetLabels()
    let node = head
    while ((node != null) && (node.item != key)) { node = node.next }
    if (node != null) {
      node.next = makeNode(item, node.next)
      setLength(length + 1)
    }
  }

  const insertBefore = (key: unknown, item: unknown) => {
    resetLabels()
    if (head === null) { return }
    if (head.item === key) {
      addFirstNode(item)
      return
    }
    let previous: Node | null = null
    let node: Node | null = head
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
    if (head) {
      resetLabels()
      setNode(head.next)
      setLength(length - 1)
    }
  }

  const removeLast = () => {
    if (head) {
      resetLabels()
      if (!head.next) {
        removeFirst()
        return
      }
      let node = head
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
    if (!head) {
      return
    }
    let targetNode = head
    let nextNode = targetNode.next
    while (nextNode !== null && nextNode.item !== key) {
      targetNode = nextNode
      nextNode = nextNode.next
    }
    if (nextNode === null) {
      removeFirst()
    } else {
      targetNode.next = nextNode.next
      resetLabels()
      setLength(length - 1)
    }
  }

  return (
    <>
      <LinkedListControls
        append={append}
        insertAfter={insertAfter}
        nodeValue={nodeValue}
        insertBefore={insertBefore}
        removeFirst={removeFirst}
        removeLast={removeLast}
        setNodeValue={setNodeValue}
        prepend={prepend}
        removeItem={removeItem} />
      <LinkedListRenderer
        linkedList={head}
        length={length}
        setNodeValue={setNodeValue} />
    </>
  )
}
