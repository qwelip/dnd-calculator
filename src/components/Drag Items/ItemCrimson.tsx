import React from 'react';
import './Item.css'

const ItemCrimson: React.FC = () => {
  const itemStyle = {
    backgroundColor: 'crimson'
  }

  return (
    <>
      <div 
        className='item'
        style={itemStyle}
      >
      </div>
    </>
  );
};

export default ItemCrimson