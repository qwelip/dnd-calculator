import React from 'react';
import './Item.css'

const ItemBlue: React.FC = () => {
  const itemStyle = {
    backgroundColor: 'blue'
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

export default ItemBlue