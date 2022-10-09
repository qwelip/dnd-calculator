import React from 'react';
import './Item.css'

const ItemDarkseagreen: React.FC = () => {
  const itemStyle = {
    backgroundColor: 'darkseagreen'
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

export default ItemDarkseagreen