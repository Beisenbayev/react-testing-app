import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Home.module.css';

import Button from '../common/Button/Button';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';

const Home = (props) => {
   return (
      <div className={s.block}>
            <div className={s.content}>
               <h1>Тестовое задание для Front-end Junior разработчика</h1>
               <p>Реши задачу и устройся на работу в компанию KMF</p>
               <div className={s.buttons}>
                  <NavLink to={'/signup'}>
                     <Button text={'Регистрация'} />
                  </NavLink>
                  <NavLink to={'/search'}>
                     <Button text={'Поиск по логину'} />
                  </NavLink>
               </div>
            </div>
            <BackgroundImage />
      </div>
   );
}


export default Home;