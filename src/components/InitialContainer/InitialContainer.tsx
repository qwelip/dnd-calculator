import React from 'react';
import './InitialContainer.css'

interface IProps {
  children?: React.ReactNode
}

const InitialContainer: React.FC<IProps> = ({children}) => {
  return (
    <div className='initial-container'>
      {children}
    </div>
  );
};

export default InitialContainer;