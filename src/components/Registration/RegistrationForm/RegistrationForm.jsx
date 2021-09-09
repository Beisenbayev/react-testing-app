import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';

import { MyInput } from '../../common/FormElements/FormElements';
import Button from '../../common/Button/Button';

const RegistrationForm = (props) => {
   return (
      <Formik initialValues={{
         firstName: '',
         lastName: '',
         username: '',
         email: '',
         password: '',
         phone: '',
         userStatus: '',
      }}
         validationSchema={Yup.object({
            firstName: Yup.string().required('required field!'),
            lastName: Yup.string().required('required field!'),
            username: Yup.string().required('required field!'),
            email: Yup.string().required('required field!'),
            password: Yup.string().required('required field!'),
            phone: Yup.string().required('required field!')
               .length(11, 'incorrect phone number'),
            userStatus: Yup.string().required('required field!')
               .length(1, 'only 1 number in range [1-5]'),
         })}
         onSubmit={(values) => console.log(values)}>
         {formik =>
            <Form className={s.form}>
               <MyInput name={'firstName'}
                  label={'Имя'}
                  type={'text'} />
               <MyInput name={'lastName'}
                  label={'Фамилия'}
                  type={'text'} />
               <MyInput name={'username'}
                  label={'Логин'}
                  type={'text'} />
               <MyInput name={'email'}
                  label={'Электронная почта'}
                  type={'email'} />
               <MyInput name={'password'}
                  label={'Пароль'}
                  type={'password'} />
               <MyInput name={'phone'}
                  label={'Номер телефона'}
                  type={'number'} />
               <MyInput name={'userStatus'}
                  label={'Статус'}
                  type={'number'}/>
               <Button type={'submit'}
                  text={'Регистрация'}
                  disabled={formik.isSubmitting} />
            </Form>
         }
      </Formik>
   );
}


export default RegistrationForm;