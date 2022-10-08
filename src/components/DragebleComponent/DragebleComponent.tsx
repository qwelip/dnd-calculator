import React from 'react'
import './DragebleComponent.css'

interface IProps {
  children?: React.ReactNode
  id: number
}

const DragebleComponent: React.FC<IProps> = ({children, id}) => {

  const handleDragStart = () => {
    console.log('handleDragStart', id)
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