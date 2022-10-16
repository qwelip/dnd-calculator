import React from 'react'
import './TargetContainer.css'

interface IProps {
  idOfDraggingItem: number
  addDraggedItemToContainer: (id: number) => void
  children: React.ReactNode
}

const TargetContainer: React.FC<IProps> = ({idOfDraggingItem, addDraggedItemToContainer, children}) => {
  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
  }
  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    addDraggedItemToContainer(idOfDraggingItem)
  }

  return (
    <div 
      className='target-container'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default TargetContainer;