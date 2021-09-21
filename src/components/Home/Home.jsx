import React from 'react';
import { NavLink } from 'react-router-dom';

import MainTitle from '../../styles/MainTitle.style.js';
import {
   StyledHome, HomeContent, HomeText, HomeButtons
} from './Home.style.js';

import Button from '../common/Button/Button.style.js';
import BgImg from '../common/BgImg/BgImg.style.js';

const Home = (props) => {
   return (
      <StyledHome>
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
      </StyledHome>
   );
}


export default Home;