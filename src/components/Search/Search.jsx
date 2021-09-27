import React from 'react';
import MetaDeclaration from '../../utils/metaDeclaration';

import MainTitle from '../../styles/MainTitle.style.js';
import { StyledSearch } from './Search.style.js';

import Wrapper from '../common/Wrapper/Wrapper.style.js';
import SearchForm from './SearchForm/SearchForm';

const Search = (props) => {
   return (
      <Wrapper>
         <StyledSearch>
            <MetaDeclaration title={'Search'} />
            <MainTitle>Поиск данных</MainTitle>
            <SearchForm />
         </StyledSearch>
      </Wrapper>
   );
}


export default Search;