import React from 'react';
import arroSvg from '../../icons/arrow.svg';
import linkSvg from '../../icons/line.svg';
import classes from './link.module.css';
interface IProps {
  dateFieldValue?: number | string;
  placeholder?: string;
  type ?: string,
  value?: number |string | undefined;
  status?: string;
  errorMessage?: string;
  disabled?: boolean;

}

const linkRight: React.FC<IProps> = props => {

let showValue = false
  {props.value ? showValue = true : showValue = false} 
  return (
    
      <div data-test="dataFieldWrapper" className={classes.LinkWrapper}>
        <p>Master Programme</p>
      <img  className={classes.line}src={linkSvg} alt="linkSvg" />
      <img src={arroSvg} alt="linkSvg" />
    </div>
  );
};

export default linkRight;

// https://cdn.nohat.cc/thumb/f/720/5952788618018816.jpg


