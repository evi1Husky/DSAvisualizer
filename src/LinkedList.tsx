import { useState } from "react"

interface Node {
  item: unknown
  next: Node | null
}

const makeNode = (item: unknown, next: Node | null): Node => ({item, next})

export const LinkedList = () => {
  const [head, addNode] = useState<Node|null>(null)
  const [length, setLength] = useState(0)

  const append = (item: unknown) => {
    if (head === null) {
      addNode(makeNode(item, head))
    } else {
      let node = head
      while (node.next != null) { node = node.next }
      node.next = makeNode(item, null)
      addNode({...head})
    }
    setLength(length + 1)
  }

  const insertAfter = (key: unknown, item: unknown) => {
    let node = head
    while ((node != null) && (node.item != key)) { node = node.next }
    if (node != null) {
      node.next = makeNode(item, node.next)
      addNode({...head!})
    }
    setLength(length + 1)
  }

  const insertBefore = () => {
    
  }

  console.clear()
  console.log(head)
  console.log(length)

  return (
    <>
      <button onClick={() => {append(7)}}> append </button>
      <button onClick={() => {insertAfter(7, 9)}}> insertAfter </button>
    </>
  )
}
