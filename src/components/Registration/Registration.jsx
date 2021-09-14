import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   getSuccessMessageSelector,
   getIsSubmittingSelector
} from '../../redux/selectors/registration-selector.js';
import {
   signUpThunkCreater as signUp,
   resetSuccessMessageThunkCreater as resetSuccessMessage
} from '../../redux/reducers/registration-reducer.js';
import cn from 'classnames';
import s from './Registration.module.css';

import RegistrationForm from './RegistrationForm/RegistrationForm';

const Registration = (props) => {
   const dispatch = useDispatch();
   const successMessage = useSelector(state => getSuccessMessageSelector(state));
   const isSubmitting = useSelector(state => getIsSubmittingSelector(state));

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