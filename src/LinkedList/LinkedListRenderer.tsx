import css from '../css/linkedList.module.css'
import { LinkedListNode } from './LinkedListNode.tsx'
import { randomKey } from '../utility.ts'

interface LinkedListProps {
  selectedNode: React.MutableRefObject<string>
  linkedList: Node | null
  length: number
}

interface Node {
  item: unknown
  next: Node | null
}

interface NodeToRender {
  head: boolean
  item: string
  next: string
}

const makeNodeArray = (node: Node, n: number, arr: NodeToRender[]): NodeToRender[] => {
  if (n === 0) {
    return arr
  } else {
    let nodeToRender: NodeToRender = {
      head: false,
      item: String(node.item),
      next: String(node.next?.item),
    }
    arr.length === 0 ? nodeToRender.head = true : null
    arr.push(nodeToRender)
    return makeNodeArray(node.next!, n -= 1, arr)
  }
}

export const LinkedListRenderer: React.FC<LinkedListProps>
  = ({ linkedList, length, selectedNode }) => {
    let nodes = makeNodeArray(linkedList!, length, [])

    return (
      <div className={css['array']} id='listContainer'>
        {nodes.map((node): React.ReactNode => {
          return <LinkedListNode key={randomKey(5)}
            node={node} selectedNode={selectedNode} />
        })}
      </div>
    )
  }
