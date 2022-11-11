import React, { useContext } from 'react';
import { CalculatorContext, IContextItems } from '../../CalculatorContext/CalculatorContextProvider';
import './CalculatorResultBtn.css'

const CalculatorResultBtn = () => {
  const { state, dispatch } = useContext(CalculatorContext) as IContextItems

  const handleClick = () => {
    const num1 = +state.firstNumber
    const num2 = +state.secondNumber
    const operation = state.operationKind

    if (!num1 || !num2 || !operation) {
      return
    }

    switch(operation) {
      case 'summation': {
        const res = num1 + num2
        dispatch({type: 'PROCESS_RESULT', payload: res})
        break
      }
      case 'multiplication': {
        const res = num1 * num2
        dispatch({type: 'PROCESS_RESULT', payload: res})
        break
      }
      case 'subtraction': {
        const res = num1 - num2
        dispatch({type: 'PROCESS_RESULT', payload: res})
        break
      }
      case 'divide': {
        const res = num1 / num2
        dispatch({type: 'PROCESS_RESULT', payload: res})
        break
      }
      default: {
        return
      }
    }
  }

  return (
    <div 
      className='calculator-result-btn'
      onClick={handleClick}
    >
      <button className='calculator-result-btn__btn'>=</button>
    </div>
  );
};

export default CalculatorResultBtn;