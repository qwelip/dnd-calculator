import React from 'react'
import { allItems } from '../Drag Items/AllItemsList';
import DraggedComponent from '../DraggedComponent/DraggedComponent';
import './TargetContainer.css'

interface IProps {
  idOfDraggingItem: number | undefined
  draggedItems: number[]
  addDraggedItemToContainer: (id: number) => void
  deleteDraggedItem: (id: number) => void
  setPlaceToAddItem: (id: number, top: boolean) => void
}

const TargetContainer: React.FC<IProps> = ({idOfDraggingItem, draggedItems, addDraggedItemToContainer, deleteDraggedItem, setPlaceToAddItem}) => {

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
  }

  const renderItems = () => {
    return draggedItems.map((id) => {
       const item = allItems.find(item => item.id === id)
       const Component = item!.component
       const randomKey = Math.random()
       return (
        <DraggedComponent 
          key={randomKey}
          id={id}
          onDelete={deleteDraggedItem}
          setPlaceToAddItem={setPlaceToAddItem}
        >
          <Component/>
        </DraggedComponent>
       ) 
    })
  }
  
  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    addDraggedItemToContainer(idOfDraggingItem!)
  }

  return (
    <div 
      className='target-container'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {renderItems()}
    </div>
  );
};

export default TargetContainer;