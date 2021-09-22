import React from 'react';

import MainTitle from '../../styles/MainTitle.style.js';
import { StyledSearch } from './Search.style.js';

import Wrapper from '../common/Wrapper/Wrapper.style.js';
import SearchForm from './SearchForm/SearchForm';

const Search = (props) => {
   return (
      <Wrapper>
         <StyledSearch>
            <MainTitle>Поиск данных</MainTitle>
            <SearchForm />
         </StyledSearch>
      </Wrapper>
   );
}


export default Search;