import React from 'react'
import './DraggableComponent.css'

interface IProps {
  children: React.ReactNode
  id: number
  draggedItems: number[] 
  setId: (id: number) => void
}


const DraggableComponent: React.FC<IProps> = ({children, id, draggedItems, setId}) => {

  const isItemDragged = draggedItems.length > 0 && draggedItems.includes(id)
  
  const handleDragStart = () => {
      setId(id)
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