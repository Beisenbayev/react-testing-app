import React from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import s from './FormElements.module.css';

export const MyInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   const error = meta.touched && meta.error;

   return (
      <div>
         <label className={s.label} htmlFor={props.name}>{label}</label>
         <input className={cn(s.input, {
            [s.hasError]: error
         })} {...field} {...props} />
         {error &&
            <div className={s.errorMessage}>{meta.error}</div>
         }
      </div>
   );
};