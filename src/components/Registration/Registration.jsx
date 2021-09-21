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

import MainTitle from '../../styles/MainTitle.style.js';
import {
   StyledRegistration, RegistrationMessage
} from './Registration.style.js';

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
      <StyledRegistration>
         <MainTitle>Регистрация</MainTitle>
         <RegistrationForm submit={handleSubmit}
            isSubmitting={isSubmitting} />
         {successMessage &&
            <RegistrationMessage>{successMessage}</RegistrationMessage>
         }
      </StyledRegistration>
   );
}


export default Registration;