import React from 'react';
import cn from 'classnames';
import s from './Search.module.css';

import SearchForm from './SearchForm/SearchForm';

const Search = (props) => {
   return (
      <div className={s.block}>
         <h1 className={cn(s.title, 'main-title')}>Поиск данных</h1>
         <SearchForm />
      </div>
   );
}


export default Search;