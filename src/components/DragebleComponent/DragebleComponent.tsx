import React, { useState } from 'react'
import './DragebleComponent.css'

interface IProps {
  children?: React.ReactNode
}

const DragebleComponent: React.FC<IProps> = ({children}) => {

  const [isClick, setIsClick] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const [elementTop, setElementTop] = useState(0)
  const [elementLeft, setElementLeft] = useState(0)
  const [prevElementLeft, setPrevElementLeft] = useState(0)
  const [prevElementTop, setPrevElementTop] = useState(0)

  const [prevPosCursorX, setPrevPosCursorX] = useState(0)
  const [prevPosCursorY, setPrevPosCursorY] = useState(0)

  const handleMouseDown = () => {
    setIsClick(true)
  }

  const handleMouseUp = () => {
    setIsClick(false)
    setPrevElementLeft(elementLeft)
    setPrevElementTop(elementTop)
    setIsDragging(false)
  }

  const handleMouseOut = () => {
    setIsClick(false)
    setPrevElementLeft(elementLeft)
    setPrevElementTop(elementTop)
    setIsDragging(false)
  }
  
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isClick) {
      setPrevPosCursorX(e.clientX)
      setPrevPosCursorY(e.clientY)
    }
    if (isClick) {
      setIsDragging(true)
      setElementLeft(() => prevElementLeft + (e.clientX - prevPosCursorX))
      setElementTop(() => prevElementTop + (e.clientY - prevPosCursorY))
    }
  }

  const divStyles = {
    top: elementTop, 
    left: elementLeft,
    opacity: isDragging ? '10%' : '100%',
  }

  const divStyles_old_copy = {
    top: prevElementTop, 
    left: prevElementLeft,
  }

  return (
    <>
      <div 
        className='drageble-component'
        style={divStyles}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        {children}
      </div>
      {
        isDragging &&
        <div 
        className='drageble-component_old-copy'
        style={divStyles_old_copy}
        >
          {children}
        </div>
      }
    </>
  );
};

export default DragebleComponent;