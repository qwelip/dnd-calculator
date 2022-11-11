import React from 'react';

export const CalculatorContext = React.createContext({})

interface IProps {
  children: React.ReactNode
}

export type dispatchTypes = 
| 'SET_DISPLAY_OUTPUT'
| 'SET_NUMBER'
| 'SET_OPERATION'
| 'RESET'
| 'PROCESS_RESULT'

type operations = 
| 'summation'
| 'multiplication'
| 'subtraction'
| 'divide' 
| undefined

interface IDispatchArgs {
  type: dispatchTypes
  payload?: string | number
}

export interface IContextItems {
  state: IInitialState
  dispatch: React.Dispatch<IDispatchArgs>
}

export interface IInitialState {
  displayOutput: string
  firstNumber: string,
  secondNumber: string,
  operationKind: operations,
  isAllPartsDragged: boolean,
  isResult: boolean,
}

const initialState: IInitialState = {
  displayOutput: '',
  firstNumber: '',
  secondNumber: '',
  operationKind: undefined,
  isAllPartsDragged: false,
  isResult: false,
}

const reducer = (state: IInitialState, {type, payload}: {type: dispatchTypes, payload: string | number}): IInitialState => {
  switch(type) {
    case 'SET_DISPLAY_OUTPUT': 
      const payloadNoZero = state.displayOutput.length === 0 && payload === '0' ? '' : payload
      const result = state.displayOutput + payloadNoZero as string
      return {
        ...state,
        displayOutput: result,
      }
    case 'RESET': 
      return {
        ...state,
        displayOutput: '',
        operationKind: undefined,
        firstNumber: '',
        secondNumber: '',
        isResult: false,
      }
    case 'SET_OPERATION': 
      return {
        ...state,
        operationKind: payload as operations,
        displayOutput: '',
      }
    case 'SET_NUMBER': 
      return {
        ...state,
        firstNumber: state.operationKind ? state.firstNumber : state.firstNumber + payload,
        secondNumber: state.operationKind ? state.secondNumber + payload : state.secondNumber,
      }
    case 'PROCESS_RESULT': 
      return {
        ...state,
        displayOutput: String(payload),
        operationKind: undefined,
        firstNumber: String(payload),
        secondNumber: '',
        isResult: true,
      }
    default:
      return state
  }
}

export const CalculatorContextProvider: React.FC<IProps> = ({children}) => {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <CalculatorContext.Provider value={{state, dispatch}}>
      {children}
    </CalculatorContext.Provider>
  );
};
