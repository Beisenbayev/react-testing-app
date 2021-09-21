import React from 'react';

import MainTitle from '../../styles/MainTitle.style.js';
import { StyledSearch } from './Search.style.js';

import SearchForm from './SearchForm/SearchForm';

const Search = (props) => {
   return (
      <StyledSearch>
         <MainTitle>Поиск данных</MainTitle>
         <SearchForm />
      </StyledSearch>
   );
}


export default Search;