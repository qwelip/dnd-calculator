import React, { useEffect, useRef, useState } from 'react'
import './DraggedComponent.css'

interface IProps {
  children: React.ReactNode
  id: number
  idOfDraggingItem: number
  onDelete: (id: number) => void
  setPlaceToAddItem: (id: number, top: boolean) => void
}

const DraggedComponent:React.FC<IProps> = ({children, id, idOfDraggingItem, onDelete, setPlaceToAddItem}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [componentOffsetTop, setComponentOffsetTop] = useState(0)
  const [componentHeight, setComponentHeight] = useState(0)
  const [isTop, setIsTops] = useState<boolean>()
  const [isMarkerShow, setIsMarkerShow] = useState(false)
  const [isDropAreaShow, setIsDropAreaShow] = useState(false)

  const deleteItem = () => {
    onDelete(id)
  }

  const handleDragLeave = () => {
    setIsMarkerShow(false)
  }

  const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    setIsMarkerShow(true)
  }

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    const cursorPositionY = Math.floor(e.clientY) - Math.floor(componentOffsetTop) 
    if (cursorPositionY >= -1 && cursorPositionY < (componentHeight - cursorPositionY) / 2) {
      setIsTops(true)
    } else {
      setIsTops(false)
    }
  }

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setPlaceToAddItem(id, isTop!)
  }

  useEffect(() => {
    setComponentHeight(divRef.current!.getBoundingClientRect().height)
    setComponentOffsetTop(divRef.current!.getBoundingClientRect().y)
  }, [])

  const markerStyles = {
    top: isTop ? 0 : componentHeight,
    left: -50,
    width: '10%',
    height: 5,
    backgroundColor: 'black',
    opacity: isMarkerShow ? '100%' : '0%'
  }

  useEffect(() => {
    if (!idOfDraggingItem) {
      setIsDropAreaShow(false)
    }
    else if (idOfDraggingItem !== id) {
      setIsDropAreaShow(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idOfDraggingItem])

  return (
    <div 
      ref={divRef}
      className='dragged-component'
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      >
      {
        isDropAreaShow &&
        <div 
        onDragOver={handleDragOver}
          className="dragged-component__drop-area"
        >
        </div>
      }
      <div 
        className='drag-marker'
        style={markerStyles}
      ></div>
      <button 
        className='dragged-component__delete-btn'
        onClick={deleteItem}
      ></button>
      <div className="dragged-component__children">
        {children}
      </div>
    </div>
  );
};

export default DraggedComponent;