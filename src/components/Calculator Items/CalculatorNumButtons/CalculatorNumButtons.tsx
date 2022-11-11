import React from 'react';
import { CalculatorContext, IContextItems } from '../../CalculatorContext/CalculatorContextProvider';
import './CalculatorNumButtons.css'

const CalculatorNumButtons = () => {
  const {state, dispatch} = React.useContext(CalculatorContext) as IContextItems

  const handleClickAddNumber: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (state.isResult && !state.operationKind) {
      return
    }
    const button = e.target as HTMLButtonElement
    dispatch({type: 'SET_DISPLAY_OUTPUT', payload: button.innerHTML})
    dispatch({type: 'SET_NUMBER', payload: button.innerHTML})
  }

  const handleClickReset = () => {
    dispatch({type: 'RESET'})
  }

  return (
    <div className='calculator-num-buttons'>
      <button 
        className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}
      >1</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >2</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >3</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >4</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >5</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >6</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >7</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >8</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickAddNumber}      
      >9</button>
      <button className='calculator-num-buttons__btn calculator-num-buttons__btn_zero'
        onClick={handleClickAddNumber}
      >0</button>
      <button className='calculator-num-buttons__btn'
        onClick={handleClickReset}
      >C</button>
    </div>
  );
};

export default CalculatorNumButtons;