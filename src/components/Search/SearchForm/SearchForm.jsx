import React from 'react';
import { Formik, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import s from './SearchForm.module.css';

import { MyInput } from '../../common/FormElements/FormElements';
import Button from '../../common/Button/Button';

const SearchForm = (props) => {
   return (
      <Formik initialValues={{ term: '' }}
         onSubmit={({ term }, { setSubmitting }) => {
            console.log(term);
            setSubmitting(false);
         }}>
         {formik =>
            <Form className={s.block}>
               <MyInput name={'term'}
                  label={'Введите логин'}
                  type={'text'} />
               <NavLink to={'/user'}>
                  <Button type={'submit'}
                     text={'Поиск'}
                     disabled={formik.isSubmitting} />
               </NavLink>
            </Form>
         }
      </Formik>
   );
}


export default SearchForm;