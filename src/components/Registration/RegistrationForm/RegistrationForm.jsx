import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';

import { MyInput } from '../../common/FormElements/FormElements';
import Button from '../../common/Button/Button';

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
         <Form className={s.block}>
            <MyInput name={'name'}
               label={'Имя'}
               type={'text'} />
            <MyInput name={'job'}
               label={'Работа'}
               type={'text'} />
            <Button type={'submit'}
               text={'Регистрация'}
               disabled={props.isSubmitting} />
         </Form>
      </Formik>
   );
}


export default RegistrationForm;