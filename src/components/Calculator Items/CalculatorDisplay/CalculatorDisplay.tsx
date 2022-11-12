import React, { useContext, useState, useRef, useEffect } from 'react';
import { CalculatorContext, IContextItems } from '../../CalculatorContext/CalculatorContextProvider';
import './CalculatorDisplay.css'

const CalculatorDisplay = () => {
  const divRef = useRef(null)
  const [isNumbersVisible, setIsNumbersVisible] = useState(false)
  const {state} = useContext(CalculatorContext) as IContextItems

  useEffect(() => {
    const element = divRef.current! as HTMLDivElement
    setIsNumbersVisible(element.parentElement?.classList.value !== 'draggable-component')
  }, [])

  return (
    <div ref={divRef} className='calculator-display'>
      <div className="calculator-display__input">
        {
          isNumbersVisible &&
          state.displayOutput
        }
      </div>
    </div>
  );
};

export default CalculatorDisplay;