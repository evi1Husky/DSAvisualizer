import css from './styles/linkedList.module.css'
import { LinkedListNode } from './LinkedListNode.tsx'

interface LinkedListProps {
  linkedList: Node | null
  length: number
  setNodeValue: (num: number) => void
}

interface Node {
  item: unknown
  next: Node | null
  new: boolean
}

interface NodeToRender {
  item: unknown
  next: unknown
  index: number
  new: boolean
}

type NodeArray = NodeToRender[]

const makeNodeArray = (node: Node, n: number, arr: NodeArray, i = 1): NodeArray => {
  if (n === 0) {
    return arr
  } else {
    arr.push({
      item: node.item,
      next: node.next?.item,
      index: i,
      new: node.new
    })
    return makeNodeArray(node.next!, n -= 1, arr, i += 1)
  }
}

export const LinkedListRenderer: React.FC<LinkedListProps>
  = ({ linkedList, length, setNodeValue }) => {
    let nodes: NodeArray = []

    nodes = makeNodeArray(linkedList!, length, nodes)

    return (
      <div className={css['array']}>
        {nodes.map((node): React.ReactNode => {
          return <LinkedListNode key={node.index} node={node} setNodeValue={setNodeValue} />
        })}
      </div>
    )
  }
