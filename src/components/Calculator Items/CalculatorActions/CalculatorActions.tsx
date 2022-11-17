import React, { useContext } from 'react';
import { CalculatorContext, IContextItems } from '../../CalculatorContext/CalculatorContextProvider';
import './CalculatorActions.css'

const CalculatorActions = () => {
  const { state, dispatch } = useContext(CalculatorContext) as IContextItems

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!state.firstNumber) {
      return
    }

    if (!state.isAllItemsDragged) {
      return
    }

    const action = event.target as HTMLButtonElement
    switch(action.innerHTML) {
      case '+': {
        dispatch({type: 'SET_OPERATION', payload: 'summation'})
        break
      }
      case '-': {
        dispatch({type: 'SET_OPERATION', payload: 'subtraction'})
        break
      }
      case '*': {
        dispatch({type: 'SET_OPERATION', payload: 'multiplication'})
        break
      }
      case '/': {
        dispatch({type: 'SET_OPERATION', payload: 'divide'})
        break
      }
      default: {
        return null
      }
    }
  }

  return (
    <div className='calculator-actions'>
      <button
        className={`calculator-actions__button ${ state.operationKind?.includes('summation') ? 'calculator-actions__button_active' : 'calculator-actions__button_inactive' }`}
        onClick={handleClick}
      >
        +
      </button>
      <button
        className={`calculator-actions__button ${ state.operationKind?.includes('subtraction') ? 'calculator-actions__button_active' : 'calculator-actions__button_inactive' }`}
        onClick={handleClick}
      >
        -
      </button>
      <button
        className={`calculator-actions__button calculator-actions__button_multiply ${ state.operationKind?.includes('multiplication') ? 'calculator-actions__button_active' : 'calculator-actions__button_inactive' }`}
        onClick={handleClick}
      >
        *
      </button>
      <button
        className={`calculator-actions__button ${ state.operationKind?.includes('divide') ? 'calculator-actions__button_active' : 'calculator-actions__button_inactive' }`}
        onClick={handleClick}
      >
        /
      </button>
    </div>
  );
};

export default CalculatorActions;