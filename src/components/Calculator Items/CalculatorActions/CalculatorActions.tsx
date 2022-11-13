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

  const stylesActiveBtn = (type: string) => {
    return {
      background: state.operationKind?.includes(type) ? '#0000003b' : 'white',
    }
  }

  return (
    <div className='calculator-actions'>
      <button
        className='calculator-actions__button'
        style={stylesActiveBtn('summation')}
        onClick={handleClick}
      >
        +
      </button>
      <button
        className='calculator-actions__button'
        style={stylesActiveBtn('subtraction')}
        onClick={handleClick}
      >
        -
      </button>
      <button
        className='calculator-actions__button calculator-actions__button_multiply'
        style={stylesActiveBtn('multiplication')}
        onClick={handleClick}
      >
        *
      </button>
      <button
        className='calculator-actions__button'
        style={stylesActiveBtn('divide')}
        onClick={handleClick}
      >
        /
      </button>
    </div>
  );
};

export default CalculatorActions;