import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   signUpThunkCreater as signUp,
   resetSuccessMessageThunkCreater as resetSuccessMessage
} from '../../redux/reducers/registration-reducer.js';
import cn from 'classnames';
import s from './Registration.module.css';

import RegistrationForm from './RegistrationForm/RegistrationForm';

const Registration = (props) => {
   const dispatch = useDispatch();
   const successMessage = useSelector((state) => state.registration.successMessage);
   const isSubmitting = useSelector((state) => state.registration.isSubmitting);

   useEffect(() => {
      dispatch(resetSuccessMessage());
   }, []);

   const handleSubmit = (data) => {
      dispatch(signUp(data));
   }

   return (
      <div className={s.block}>
         <h1 className={cn('main-title')}>Регистрация</h1>
         <RegistrationForm submit={handleSubmit}
            isSubmitting={isSubmitting} />
         {successMessage &&
            <p className={s.message}>{successMessage}</p>
         }
      </div>
   );
}


export default Registration;