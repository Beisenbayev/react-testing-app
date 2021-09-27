import React from 'react';
import { NavLink } from 'react-router-dom';
import MetaDeclaration from '../../utils/metaDeclaration';

import MainTitle from '../../styles/MainTitle.style.js';
import {
   StyledHome, HomeContent, HomeText, HomeButtons
} from './Home.style.js';

import Wrapper from '../common/Wrapper/Wrapper.style.js';
import Button from '../common/Button/Button.style.js';
import BgImg from '../common/BgImg/BgImg.style.js';
import ThemeToggler from '../common/ThemeToggler/ThemeToggler.style.js';

const Home = (props) => {
   return (
      <Wrapper>
         <StyledHome>
            <MetaDeclaration title={'Home'} />
            <HomeContent>
               <MainTitle>Тестовое задание для Front-end Junior разработчика</MainTitle>
               <HomeText>Реши задачу и устройся на работу в компанию KMF</HomeText>
               <HomeButtons>
                  <NavLink to={'/signup'}>
                     <Button>Регистрация</Button>
                  </NavLink>
                  <NavLink to={'/search'}>
                     <Button>Поиск по логину</Button>
                  </NavLink>
               </HomeButtons>
            </HomeContent>
            <BgImg />
            <ThemeToggler checked={props.checked}
               onChange={props.toggleTheme} />
         </StyledHome>
      </Wrapper>
   );
}


export default Home;