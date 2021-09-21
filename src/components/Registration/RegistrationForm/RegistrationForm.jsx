import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { StyledRegistrationForm } from './RegistrationForm.style.js'

import MyInput from '../../common/FormElements/Input/MyInput';
import Button from '../../common/Button/Button.style.js'

const RegistrationForm = (props) => {
   return (
      <Formik initialValues={{
         name: '',
         job: '',
      }}
         validationSchema={Yup.object({
            name: Yup.string().required('required field!')
               .max(30, 'must be 30 characters or less!'),
            job: Yup.string().required('required field!')
               .max(30, 'must be 30 characters or less!')
               .min(2, 'must be 2 characters or more!'),
         })}
         onSubmit={(values, { setSubmitting, resetForm }) => {
            props.submit(values);
            setSubmitting(false);
            resetForm();
         }}>
         <StyledRegistrationForm>
            <MyInput name={'name'}
               label={'Имя'}
               type={'text'} />
            <MyInput name={'job'}
               label={'Работа'}
               type={'text'} />
            <Button type={'submit'}
               disabled={props.isSubmitting}>Регистрация</Button>
         </StyledRegistrationForm>
      </Formik>
   );
}


export default RegistrationForm;