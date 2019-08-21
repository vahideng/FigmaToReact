import React from 'react';
import classes from './input.module.css';

interface IProps {
  labelName?: string;
  placeHolder?: string;
  type: string;
  value?: string | number | string[] | undefined;
  style?: string;
  errorMessage ?: string
  disabled ? : boolean
}

const Input: React.FC<IProps> = props => {
  return (
    <div className={classes.Container}>
      <p className={props.style === "Error" ? [classes.Label, classes.LabelError].join(' ') :  classes.Label  }>{props.labelName}</p>

      <input
      disabled={props.disabled}
        className={
          props.style
            ? [classes.InputWrapper, classes[props.style]].join(' ')
            : classes.InputWrapper
        }
        placeholder={props.placeHolder}
        type={props.type}
        value={props.value}
      />
     {props.style === "Error" ? <p className={[classes.Label,classes.LabelError
      
      ,
       classes.ErrorMessage].join(' ') }>{props.errorMessage}</p> : null}  
    </div>
  );
};

export default Input;
