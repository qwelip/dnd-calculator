import ItemCrimson from "./ItemCrimson";
import ItemDarkseagreen from "./ItemDarkseagreen";

type colors = 'crimson' | 'darkseagreen'

export interface IItem {
  id: number
  component: React.FC
  bgColor?: colors
}

export const allItems: IItem[] = [
  {
    id: 1,
    component: ItemCrimson,
    bgColor: 'crimson',
  },
  {
    id: 2,
    component: ItemDarkseagreen,
    bgColor: 'darkseagreen',
  }
]