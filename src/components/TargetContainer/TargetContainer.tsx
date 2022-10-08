import React from 'react'
import './TargetContainer.css'

interface IProps {
  children?: React.ReactNode
}

const TargetContainer: React.FC<IProps> = ({children}) => {

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    console.log('handleDragOver')
  }

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    console.log('handleDrop')
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