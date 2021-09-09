import React from 'react';
import s from './UserDataLine.module.css';

const UserDataLine = ({ title, text, ...props }) => {
   return (
      <div className={s.block}>
         <h3>{title}</h3>
         <p>{text}</p>
      </div>
   );
}


export default UserDataLine;