import React, { useContext } from 'react'
import { CalculatorContext, IContextItems } from '../CalculatorContext/CalculatorContextProvider'
import './TargetContainer.css'

interface IProps {
  idOfDraggingItem: number
  addDraggedItemToContainer: (id: number) => void
  children: React.ReactNode
}

const TargetContainer: React.FC<IProps> = ({idOfDraggingItem, addDraggedItemToContainer, children}) => {

  const { state } = useContext(CalculatorContext) as IContextItems

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
  }
  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    addDraggedItemToContainer(idOfDraggingItem)
  }

  return (
    <div 
      className={state.isAllItemsDragged ? 'target-container target-container_all' : 'target-container target-container_not-all'}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default TargetContainer;