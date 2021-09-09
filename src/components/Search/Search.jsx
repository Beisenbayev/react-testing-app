import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import {
   setUserDataThunkCreater as setUserData,
} from '../../redux/reducers/user-reducer.js';
import s from './Search.module.css';

import SearchForm from './SearchForm/SearchForm';

const Search = (props) => {
   const dispatch = useDispatch();

   const onSearch = (term) => {
      dispatch(setUserData(term));
   }

   return (
      <div className={s.block}>
         <h1 className={cn(s.title, 'main-title')}>Поиск данных</h1>
         <SearchForm search={onSearch} />
      </div>
   );
}


export default Search;