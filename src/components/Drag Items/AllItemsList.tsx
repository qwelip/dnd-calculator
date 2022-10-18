import CalculatorActions from "../Calculator Items/CalculatorActions/CalculatorActions";
import CalculatorDisplay from "../Calculator Items/CalculatorDisplay/CalculatorDisplay";
import CalculatorNumButtons from "../Calculator Items/CalculatorNumButtons/CalculatorNumButtons";
import CalculatorResultBtn from "../Calculator Items/CalculatorResultBtn/CalculatorResultBtn";

type colors = 'crimson' | 'darkseagreen' | 'blue'

export interface IItem {
  id: number
  component: React.FC
  bgColor?: colors
}

export const allItems: IItem[] = [
  {
    id: 1,
    component: CalculatorActions,
    bgColor: 'crimson',
  },
  {
    id: 2,
    component: CalculatorDisplay,
    bgColor: 'darkseagreen',
  },
  {
    id: 3,
    component: CalculatorNumButtons,
    bgColor: 'blue',
  },
  {
    id: 4,
    component: CalculatorResultBtn,
    bgColor: 'blue',
  },
]