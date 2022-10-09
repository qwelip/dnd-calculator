import React, { useState } from 'react';
import './App.css'
import { allItems } from './components/Drag Items/AllItemsList';
import Item from './components/Drag Items/ItemCrimson';
import DragebleComponent from './components/DragebleComponent/DragebleComponent';
import InitialContainer from './components/InitialContainer/InitialContainer';
import TargetContainer from './components/TargetContainer/TargetContainer';


export function App() {

  const [selectedItem, setSelectedItem] = useState<number>()

  const assignItem = (id: number): void => {
    setSelectedItem(id)
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
              <DragebleComponent 
                key={item.id} 
                id={item.id}
                handleAssign={assignItem}
              >
                <Component/>
              </DragebleComponent>
            )
          })
        }
      </InitialContainer>

      <TargetContainer
        selectedItem={selectedItem}
      />
    </div>
  );
}
