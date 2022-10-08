import React, { useState } from 'react';
import './App.css'
import Item from './components/Drag Items/Item';
import DragAndDropItem from './components/DragAndDropItem/DragAndDropItem';
import InitialContainer from './components/InitialContainer/InitialContainer';
import TargetContainer from './components/TargetContainer/TargetContainer';


export function App() {

  const [cursorTop, setCursorTop] = useState(0)
  const [cursorLeft, setCursorLeft] = useState(0)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setCursorLeft(e.clientX)
    setCursorTop(e.clientY) 
  }

  return (
    <div 
      className="app"
      onMouseMove={handleMouseMove}
    >
      <InitialContainer>
        <DragAndDropItem
          cursorTop={cursorTop}
          cursorLeft={cursorLeft}
        >
          <Item bgColor='crimson'/>
        </DragAndDropItem>
        <DragAndDropItem
          cursorTop={cursorTop}
          cursorLeft={cursorLeft}
        >
          <Item bgColor='darkseagreen'/>
        </DragAndDropItem>
      </InitialContainer>

      <TargetContainer>
      </TargetContainer>
    </div>
  );
}
