import React from 'react';
import cn from 'classnames';
import s from './Registration.module.css';

import RegistrationForm from './RegistrationForm/RegistrationForm';

const Registration = (props) => {
   return (
      <div className={s.block}>
         <h1 className={cn('main-title')}>Регистрация</h1>
         <RegistrationForm />
      </div>
   );
}


export default Registration;