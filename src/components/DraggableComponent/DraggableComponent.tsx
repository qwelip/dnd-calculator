import React from 'react'
import './DraggableComponent.css'

interface IProps {
  children: React.ReactNode
  id: number
  draggedItems: number[] 
  getIdOfDraggingItem: (id: number) => void
}

const DraggableComponent: React.FC<IProps> = ({children, id, draggedItems, getIdOfDraggingItem}) => {

  const isItemDragged = draggedItems.includes(id)
  
  const handleDragStart = () => {
    getIdOfDraggingItem(id)
  }
  
  const componentStyle = {
    cursor: isItemDragged ? 'not-allowed' : 'grab',
  } 

  return (
    <>
      <div 
        className='draggable-component'
        style={componentStyle}
        draggable={isItemDragged ? false : true}  
        onDragStart={handleDragStart}
      >
        {
          isItemDragged &&
          <div className='draggable-component_inactive'></div>
        }
        {children}
      </div>
    </>
  );
};

export default DraggableComponent;