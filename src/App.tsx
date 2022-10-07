import React from 'react';
import './App.css'
import Item from './components/Drag Items/Item';
import InitialContainer from './components/InitialContainer/InitialContainer';
import TargetContainer from './components/TargetContainer/TargetContainer';

function App() {
  return (
    <>
      <div className="app">
        <InitialContainer>
          <Item bgColor='crimson'/>
          <Item bgColor='darkseagreen'/>
        </InitialContainer>

        <TargetContainer>
        </TargetContainer>
      </div>
    </>
  );
}

export default App;
