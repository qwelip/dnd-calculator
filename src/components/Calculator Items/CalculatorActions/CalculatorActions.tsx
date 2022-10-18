import React from 'react';
import './CalculatorActions.css'

const CalculatorActions = () => {
  return (
    <div className='calculator-actions'>
      <button
        className='calculator-actions__button'
      >
        +
      </button>
      <button
        className='calculator-actions__button'
      >
        -
      </button>
      <button
        className='calculator-actions__button calculator-actions__button_multiply'
      >
        *
      </button>
      <button
        className='calculator-actions__button'
      >
        /
      </button>
    </div>
  );
};

export default CalculatorActions;