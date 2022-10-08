import Item from "./Item";

type colors = 'crimson' | 'darkseagreen'

interface IProps {
  bgColor: colors
}

interface IItem {
  id: number
  component: React.FC<IProps>
  bgColor: colors
}

export const allItems: IItem[] = [
  {
    id: 1,
    component: Item,
    bgColor: 'crimson',
  },
  {
    id: 2,
    component: Item,
    bgColor: 'darkseagreen',
  }
]