import React from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import s from './SearchForm.module.css';

import { MyInput } from '../../common/FormElements/FormElements';
import Button from '../../common/Button/Button';

const SearchForm = (props) => {
   const history = useHistory();

   return (
      <Formik initialValues={{ term: '' }}
         onSubmit={({ term }) => {
            history.push(`/user/${term}`);
         }}>
         {formik =>
            <Form className={s.block}>
               <MyInput name={'term'}
                  label={'Введите id'}
                  type={'text'} />
               <Button type={'submit'}
                  text={'Поиск'}
                  disabled={formik.values.term === ''} />
            </Form>
         }
      </Formik>
   );
}


export default SearchForm;