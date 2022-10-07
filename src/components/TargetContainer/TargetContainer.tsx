import React from 'react'
import './TargetContainer.css'

interface IProps {
  children?: React.ReactNode
}

const TargetContainer: React.FC<IProps> = ({children}) => {
  return (
    <div className='target-container'>
      {children}
    </div>
  );
};

export default TargetContainer;