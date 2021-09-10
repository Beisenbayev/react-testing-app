import React from 'react';
import cn from 'classnames';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   signUpThunkCreater as signUp,
   resetSuccessMessage
} from '../../redux/reducers/registration-reducer.js';
import s from './Registration.module.css';

import RegistrationForm from './RegistrationForm/RegistrationForm';

const Registration = (props) => {
   const dispatch = useDispatch();
   const successMessage = useSelector((state) => state.registration.successMessage);
   const isSubmitting = useSelector((state) => state.registration.isSubmitting);

   useEffect(() => {
      dispatch(resetSuccessMessage());
   }, [])

   const onSubmit = (data) => {
      dispatch(signUp(data));
   }

   return (
      <div className={s.block}>
         <h1 className={cn('main-title')}>Регистрация</h1>
         <RegistrationForm submit={onSubmit}
            isSubmitting={isSubmitting} />
         {successMessage &&
            <p className={s.message}>{successMessage}</p>
         }

      </div>
   );
}


export default Registration;