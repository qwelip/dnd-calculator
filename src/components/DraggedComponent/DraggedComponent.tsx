import React from 'react'
import './DraggedComponent.css'

interface IProps {
  children: React.ReactNode
  onDelete: (id: number) => void
  id: number
}

const DraggedComponent:React.FC<IProps> = ({children, id, onDelete}) => {

  const deleteItem = () => {
    onDelete(id)
  }

  return (
    <div 
      className='dragged-component'
    >
      <button 
        className='dragged-component__btn'
        onClick={deleteItem}
      ></button>
      {children}
    </div>
  );
};

export default DraggedComponent;