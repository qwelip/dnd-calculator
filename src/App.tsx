import React from 'react';
import './App.css'
import { allItems } from './components/Drag Items/AllItemsList';
import Item from './components/Drag Items/Item';
import DragebleComponent from './components/DragebleComponent/DragebleComponent';
import InitialContainer from './components/InitialContainer/InitialContainer';
import TargetContainer from './components/TargetContainer/TargetContainer';


export function App() {

  return (
    <div 
      className="app"
    >
      <InitialContainer>
        {
          allItems.map(item => {
            return (
              <DragebleComponent key={item.id} id={item.id}>
                <Item bgColor={item.bgColor}/>
              </DragebleComponent>
            )
          })
        }
      </InitialContainer>

      <TargetContainer>
      </TargetContainer>
    </div>
  );
}
