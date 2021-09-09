import React from 'react';
import s from './Button.module.css';

const Button = ({text, ...props}) => {
   return (
      <button className={s.block} {...props}>{text}</button>
   );
}


export default Button;