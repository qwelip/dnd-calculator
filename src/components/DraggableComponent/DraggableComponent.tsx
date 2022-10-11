import React from 'react'
import './DraggableComponent.css'

interface IProps {
  children: React.ReactNode
  id: number
  draggedItems: number[] 
  setId: (id: number) => void
}


const DraggableComponent: React.FC<IProps> = ({children, id, draggedItems, setId}) => {

  
  const isComponentDragged = (): boolean => {
    return draggedItems.includes(id)
  }
  
  const handleDragStart = () => {
    setId(id)
  }
  
  const componentStyle = {
    cursor: isComponentDragged() ? 'not-allowed' : 'grab',
  } 

  return (
    <>
      <div 
        className='draggable-component'
        style={componentStyle}
        draggable={isComponentDragged() ? false : true}  
        onDragStart={handleDragStart}
      >
        {
          isComponentDragged() &&
          <div className='draggable-component_inactive'></div>
        }
        {children}
      </div>
    </>
  );
};

export default DraggableComponent;