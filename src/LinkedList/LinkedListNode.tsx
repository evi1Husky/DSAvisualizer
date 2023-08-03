import css from './styles/linkedList.module.css'

interface LinkedListNodeProps {
  node: NodeToRender
  setNodeValue: (num: number) => void
}

interface NodeToRender {
  item: any
  next: any
  new: boolean
}

export const LinkedListNode: React.FC<LinkedListNodeProps> = ({ node, setNodeValue }) => {
  const nodeClick = (node: NodeToRender) => {
    setNodeValue(node.item)
  }

  const newNode = `${css['node']} ${css['nodePopUp']}`
  const oldNode = `${css['node']}`

  return (
    <div className={node.new ? newNode : oldNode}
      onClick={() => { nodeClick(node) }} >
      <div className={css['valueContainer']}>
        <p className={css['label']}>data:</p>
        <p className={css['value']}>{node.item}</p>
      </div>
      <div className={`${css['valueContainerNext']}`}>
        <p className={css['label']}>next:</p>
        <p className={css['value']}>{node.next === 'undefined' ? 'null' : node.next}</p>
      </div>
    </div>
  )
}