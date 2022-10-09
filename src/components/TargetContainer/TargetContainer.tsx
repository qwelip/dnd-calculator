import React, { useState } from 'react'
import { allItems } from '../Drag Items/AllItemsList';
import './TargetContainer.css'

interface IProps {
  selectedItem: number | undefined
}

const TargetContainer: React.FC<IProps> = ({selectedItem}) => {

  const [draggedItems, setDraggetItems] = useState<number[]>([] as number[])

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
  }

  const renderList = () => {
    return draggedItems.map((id) => {
       const obj = allItems.find(item => item.id === id)
       const Component = obj!.component
       const randomKey = Math.random()
       return <Component key={randomKey}/>
    })
  }
  
  
  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setDraggetItems(prev => {
      const arr = [...prev]
      arr.push(selectedItem!)
      return arr
    })
  }

  return (
    <div 
      className='target-container'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <>
        {
          renderList()
        }
      </>
    </div>
  );
};

export default TargetContainer;