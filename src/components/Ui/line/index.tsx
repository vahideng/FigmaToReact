import React from 'react';
import classes from './line.module.css';

interface IProps {
 
}

const dateField: React.FC<IProps> = props => {
  return (
    <>
      <p className={classes.LineBetween}>-</p>{' '}
    </>
  );
};

export default dateField;
