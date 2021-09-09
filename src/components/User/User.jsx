import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

import UserDataLine from './UserDataLine/UserDataLine';
import Button from '../common/Button/Button';

const User = (props) => {
   const mainUserdata = useSelector((state) => state.userPage.data);
   console.log('USER', mainUserdata);

   const userObj = {
      username: 'kaka',
      firstName: 'papa',
      lastName: 'mama',
      email: 'lala',
      password: 'tata',
      phone: '234'
   }

   const userDataTitles = {
      username: 'Логин',
      firstName: 'Имя',
      lastName: 'Фамиля',
      email: 'Почта',
      password: 'Пароль',
      phone: 'Номер телефона'
   };

   const userData = Object.keys(userObj).map((data, index) => {
      return <UserDataLine key={index}
         title={userDataTitles[data]}
         text={userObj[data]} />
   })

   return (
      <div className={s.block}>
         <h1 className={cn(s.title, 'main-title')}>Поиск данных</h1>
         <div className={s.userData}>
            {userData}
         </div>
         <NavLink to={'/'}>
            <Button text={'На главную'} />
         </NavLink>
      </div>
   );
}


export default User;