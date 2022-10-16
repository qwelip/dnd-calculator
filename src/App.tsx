import React, { useEffect, useState } from 'react';
import './App.css'
import { allItems } from './components/Drag Items/AllItemsList';
import DraggableComponent from './components/DraggableComponent/DraggableComponent';
import InitialContainer from './components/InitialContainer/InitialContainer';
import TargetContainer from './components/TargetContainer/TargetContainer';

interface INewItem {
  dragOverId: number
  top: boolean
}

export function App() {
  const [idOfDraggingItem, setIdOfDraggingItem] = useState<number>()
  const [draggedItems, setDraggedItems] = useState<number[]>([] as number[])
  const [whereToAddNewItem, setWhereToAddNewItem] = useState<INewItem>()

  const setId = (id: number): void => {
    setIdOfDraggingItem(id)
  }
  const addDraggedItemToItem = (id: number) => {
    if (isItemDouble) return
    setDraggedItems((prev) => {
      const arr = [...prev]
      const position = whereToAddNewItem?.top ? 0 : 1
      const targetIndex = arr.indexOf(whereToAddNewItem?.dragOverId!)
      if (targetIndex === 0 && position === 0) {
        arr.unshift(id)
        return arr
      }
      arr.splice(targetIndex + position, 0, id)
      return arr
    })
  }

  const isItemDouble = draggedItems.includes(idOfDraggingItem!)

  const addDraggedItemToContainer = (id: number) => {
    if (isItemDouble) return
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
  const setPlaceToAddItem = (id: number, top: boolean) => {
    setWhereToAddNewItem({dragOverId: id, top})
  }

  useEffect(() => {
    if (whereToAddNewItem) {
      addDraggedItemToItem(idOfDraggingItem!)
    }
  }, [whereToAddNewItem])

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
        addDraggedItemToContainer={addDraggedItemToContainer}
        deleteDraggedItem={deleteDraggedItem}
        setPlaceToAddItem={setPlaceToAddItem}
      />
    </div>
  );
}
