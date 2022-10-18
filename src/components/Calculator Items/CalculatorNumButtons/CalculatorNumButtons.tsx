import React from 'react';
import './CalculatorNumButtons.css'

const CalculatorNumButtons = () => {
  return (
    <div className='calculator-num-buttons'>
      <button className='calculator-num-buttons__btn'>9</button>
      <button className='calculator-num-buttons__btn'>8</button>
      <button className='calculator-num-buttons__btn'>7</button>
      <button className='calculator-num-buttons__btn'>6</button>
      <button className='calculator-num-buttons__btn'>5</button>
      <button className='calculator-num-buttons__btn'>4</button>
      <button className='calculator-num-buttons__btn'>3</button>
      <button className='calculator-num-buttons__btn'>2</button>
      <button className='calculator-num-buttons__btn'>1</button>
      <button className='calculator-num-buttons__btn calculator-num-buttons__btn_zero'>0</button>
    </div>
  );
};

export default CalculatorNumButtons;