import React, { useEffect, useRef, useState } from 'react'
import './DraggedComponent.css'

interface IProps {
  children: React.ReactNode
  id: number
  onDelete: (id: number) => void
  setPlaceToAddItem: (id: number, top: boolean) => void
}

const DraggedComponent:React.FC<IProps> = ({children, id, onDelete, setPlaceToAddItem}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [componentOffsetTop, setComponentOffsetTop] = useState(0)
  const [componentHeight, setComponentHeight] = useState(0)
  const [isTop, setIsTops] = useState<boolean>()
  const [isMarkerShow, setIsMarkerShow] = useState(false)

  const deleteItem = () => {
    onDelete(id)
  }

  const handleDragLeave = () => {
    setIsMarkerShow(false)
  }

  const handleDragEnter = () => {
    setIsMarkerShow((prev) => !prev)
  }
  
  const handleDragEnterMarker: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
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

  return (
    <div 
      ref={divRef}
      className='dragged-component'
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
    >
      <div 
        className='drag-marker'
        onDragEnter={handleDragEnterMarker}
        style={markerStyles}
      ></div>
      <button 
        className='dragged-component__btn'
        onClick={deleteItem}
      ></button>
      {children}
    </div>
  );
};

export default DraggedComponent;