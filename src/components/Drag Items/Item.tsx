import React from 'react';
import './Item.css'

interface IProps {
  bgColor: 'crimson' | 'darkseagreen'
}

const Item: React.FC<IProps> = ({bgColor}) => {

  const itemStyle = {
    backgroundColor: bgColor
  }

  return (
    <div 
      className='item'
      style={itemStyle}
    >
    </div>
  );
};

export default Item;