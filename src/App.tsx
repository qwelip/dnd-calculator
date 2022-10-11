import React, { useState } from 'react';
import './App.css'
import { allItems } from './components/Drag Items/AllItemsList';
import DraggableComponent from './components/DraggableComponent/DraggableComponent';
import InitialContainer from './components/InitialContainer/InitialContainer';
import TargetContainer from './components/TargetContainer/TargetContainer';


export function App() {
  const [idOfDraggingItem, setIdOfDraggingItem] = useState<number>()
  const [draggedItems, setDraggedItems] = useState<number[]>([] as number[])

  const setId = (id: number): void => {
    setIdOfDraggingItem(id)
  }
  const addDraggedItem = (id: number) => {
    setDraggedItems((prev) => {
      const arr = [...prev]
      arr.push(id)
      return arr
    })
  }
  const deleteDraggedItem = (id: number) => {
    setDraggedItems((prev) => {
      const arr = [...prev].filter(num => num !== id)
      return arr
    })
  }

  return (
    <div 
      className="app"
    >
      <InitialContainer>
        {
          allItems.map(item => {
            const Component = item.component
            return (
              <DraggableComponent 
                key={item.id} 
                id={item.id}
                setId={setId}
                draggedItems={draggedItems}
              >
                <Component/>
              </DraggableComponent>
            )
          })
        }
      </InitialContainer>

      <TargetContainer
        idOfDraggingItem={idOfDraggingItem}
        draggedItems={draggedItems}
        addDraggedItem={addDraggedItem}
        deleteDraggedItem={deleteDraggedItem}
      />
    </div>
  );
}
