import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { StyledSearchForm } from './SearchForm.style.js';

import MyInput from '../../common/FormElements/Input/MyInput';
import Button from '../../common/Button/Button.style.js';

const SearchForm = (props) => {
   const history = useHistory();

   return (
      <Formik initialValues={{ term: '' }}
         onSubmit={({ term }) => {
            history.push(`/user/${term}`);
         }}>
         {formik =>
            <StyledSearchForm>
               <MyInput name={'term'}
                  label={'Введите id'}
                  type={'text'} />
               <Button type={'submit'}
                  disabled={formik.values.term === ''}>Поиск</Button>
            </StyledSearchForm>
         }
      </Formik>
   );
}


export default SearchForm;