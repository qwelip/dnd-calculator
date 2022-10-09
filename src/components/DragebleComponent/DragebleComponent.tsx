import React from 'react'
import './DragebleComponent.css'

interface IProps {
  children?: React.ReactNode
  id: number
  handleAssign: (id: number) => void
}

const DragebleComponent: React.FC<IProps> = ({children, id, handleAssign}) => {

  const handleDragStart = () => {
    handleAssign(id)
  }

  return (
    <>
      <div 
        className='drageble-component'
        draggable={true}  
        onDragStart={handleDragStart}
      >
        {children}
      </div>
    </>
  );
};

export default DragebleComponent;