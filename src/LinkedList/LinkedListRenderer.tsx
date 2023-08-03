import css from './styles/linkedList.module.css'
import { LinkedListNode } from './LinkedListNode.tsx'
import { randomKey } from '../utility.ts'

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
  item: string
  next: string
  new: boolean
}

const makeNodeArray = (node: Node, n: number, arr: NodeToRender[]): NodeToRender[] => {
  if (n === 0) {
    return arr
  } else {
    let nodeToRender: NodeToRender = {
      item: String(node.item),
      next: String(node.next?.item),
      new: node.new
    }
    arr.push(nodeToRender)
    return makeNodeArray(node.next!, n -= 1, arr)
  }
}

export const LinkedListRenderer: React.FC<LinkedListProps>
  = ({ linkedList, length, setNodeValue }) => {
    let nodes = makeNodeArray(linkedList!, length, [])
    return (
      <div className={css['array']}>
        {nodes.map((node): React.ReactNode => {
          return <LinkedListNode key={randomKey(5)} node={node} setNodeValue={setNodeValue} />
        })}
      </div>
    )
  }
