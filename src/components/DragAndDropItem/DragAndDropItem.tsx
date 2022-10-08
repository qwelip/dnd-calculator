import React, { useEffect, useState } from 'react';
import './DragAndDropItem.css'

interface IProps {
  children?: React.ReactNode
  cursorLeft: number
  cursorTop: number
}

const DragAndDropItem: React.FC<IProps> = ({children, cursorLeft, cursorTop}) => {
  const [isDragStart, setIsDragStart] = useState(false)
  const [itemPositionTop, setItemPositionTop] = useState(0)
  const [itemPositionLeft, setItemPositionLeft] = useState(0)

  const itemStyle = {
    top: itemPositionTop, 
    left: itemPositionLeft,
  }

  const handleMouseDown = () => {
    setIsDragStart(true)
  }
  
  const handleMouseUp = () => {
    setIsDragStart(false)
  }

  const handleMouseOut = () => {
  }

  useEffect(() => {
    setItemPositionTop(cursorTop)
    setItemPositionLeft(cursorLeft)
  }, [cursorLeft, cursorTop])

  return (
    <>
      {
        <div className='original-item'
          onMouseDown={handleMouseDown}
        >
          {children}
        </div>
      }
      {
        isDragStart &&
        <div
          className='drag-and-drop-item'
          style={itemStyle}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseOut}
        >
          {children}
        </div>
      }
    </>
  );
};

export default DragAndDropItem;