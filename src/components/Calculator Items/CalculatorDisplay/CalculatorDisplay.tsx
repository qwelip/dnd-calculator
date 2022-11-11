import React, { useContext } from 'react';
import { CalculatorContext, IContextItems } from '../../CalculatorContext/CalculatorContextProvider';
import './CalculatorDisplay.css'

const CalculatorDisplay = () => {
  const {state} = useContext(CalculatorContext) as IContextItems
  return (
    <div className='calculator-display'>
      <div className="calculator-display__input">
        {state.displayOutput}
      </div>
    </div>
  );
};

export default CalculatorDisplay;