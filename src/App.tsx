import React, { useContext, useEffect, useState } from 'react';
import './App.css'
import { CalculatorContext, IContextItems } from './components/CalculatorContext/CalculatorContextProvider';
import { allItems } from './components/Drag Items/AllItemsList';
import DraggableComponent from './components/DraggableComponent/DraggableComponent';
import DraggedComponent from './components/DraggedComponent/DraggedComponent';
import InitialContainer from './components/InitialContainer/InitialContainer';
import TargetContainer from './components/TargetContainer/TargetContainer';

interface INewItem {
  dragOverId: number
  top: boolean
}

export function App() {
  const [idOfDraggingItem, setIdOfDraggingItem] = useState<number | null>()
  const [draggedItems, setDraggedItems] = useState<number[]>([] as number[])
  const [whereToAddNewItem, setWhereToAddNewItem] = useState<INewItem>()

  const { dispatch } = useContext(CalculatorContext) as IContextItems

  const isItemDouble = draggedItems.includes(idOfDraggingItem!)

  const getIdOfDraggingItem = (id: number | null): void => {
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
    dispatch({type: 'SET_IS_ALL_ITEMS', payload: false})
    dispatch({type: 'RESET'})
  }
  const setPlaceToAddItem = (id: number, top: boolean) => {
    setWhereToAddNewItem({dragOverId: id, top})
  }

  useEffect(() => {
    if (whereToAddNewItem) {
      addDraggedItemToItem(idOfDraggingItem!)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [whereToAddNewItem])

  useEffect(() => {
    if (draggedItems.length === allItems.length) {
      dispatch({type: 'SET_IS_ALL_ITEMS', payload: true})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggedItems])

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
                getIdOfDraggingItem={getIdOfDraggingItem}
                draggedItems={draggedItems}
              >
                <Component/>
              </DraggableComponent>
            )
          })
        }
      </InitialContainer>

      <TargetContainer
        idOfDraggingItem={idOfDraggingItem!}
        addDraggedItemToContainer={addDraggedItemToContainer}
      >
      {  
        draggedItems.map((id) => {
        const item = allItems.find(item => item.id === id)
        const Component = item!.component
        const randomKey = Math.random()

        return (
          <DraggedComponent 
            key={randomKey}
            id={id}
            idOfDraggingItem={idOfDraggingItem!}
            onDelete={deleteDraggedItem}
            setPlaceToAddItem={setPlaceToAddItem}
          >
            <Component/>
          </DraggedComponent>
        ) 
        })
      }
      </TargetContainer>
    </div>
  );
}
