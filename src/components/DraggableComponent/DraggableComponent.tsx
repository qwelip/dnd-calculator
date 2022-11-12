import React from 'react'
import './DraggableComponent.css'

interface IProps {
  children: React.ReactNode
  id: number
  draggedItems: number[] 
  getIdOfDraggingItem: (id: number | null) => void
}

const DraggableComponent: React.FC<IProps> = ({children, id, draggedItems, getIdOfDraggingItem}) => {

  const isItemDragged = draggedItems.includes(id)
  
  const handleDragStart = () => {
    getIdOfDraggingItem(id)
  }

  const handleDragEnd = () => {
    getIdOfDraggingItem(null)
  }
  
  const componentStyle = {
    cursor: isItemDragged ? 'not-allowed' : 'grab',
  } 

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <div 
        className='draggable-component'
        style={componentStyle}
        draggable={isItemDragged ? false : true}  
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClickCapture={handleClick}
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