import React from 'react';
import { useField } from 'formik';
import {
   StyledLabel, StyledInput, StyledErrorMessage
} from './MyInput.style.js';

const MyInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   const error = meta.touched && meta.error;

   return (
      <div>
         <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
         <StyledInput {...field} {...props} />
         {error &&
            <StyledErrorMessage>{meta.error}</StyledErrorMessage>
         }
      </div>
   );
};


export default MyInput;