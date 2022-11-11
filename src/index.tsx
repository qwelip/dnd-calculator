import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CalculatorContextProvider } from './components/CalculatorContext/CalculatorContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>
);

