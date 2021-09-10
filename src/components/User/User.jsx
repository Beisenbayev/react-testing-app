import React from 'react';
import cn from 'classnames';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
   setUserDataThunkCreater as setUserData,
} from '../../redux/reducers/user-reducer.js';
import s from './User.module.css';

import UserDataLine from './UserDataLine/UserDataLine';
import Button from '../common/Button/Button';

const User = (props) => {
   const { username } = useParams();
   const dispatch = useDispatch();

   const mainUserdata = useSelector((state) => state.userPage.data);

   useEffect(() => {
      dispatch(setUserData(username));
   }, [username]);

   const userDataTitles = {
      firstName: 'Имя',
      lastName: 'Фамиля',
      username: 'Логин',
      email: 'Почта',
      password: 'Пароль',
      phone: 'Номер телефона'
   };

   const userData = mainUserdata ? Object.keys(userDataTitles).map((title, index) => {
      return <UserDataLine key={index}
         title={userDataTitles[title]}
         text={mainUserdata[title]} />
   }) : undefined;

   return (
      <div className={s.block}>
         <h1 className={cn(s.title, 'main-title')}>Поиск данных</h1>
         {userData ?
            <div className={s.userData}>
               {userData}
            </div> :
            <p className={s.errorText}>user not found</p>
         }
         <NavLink to={'/'}>
            <Button text={'На главную'} />
         </NavLink>
      </div>
   );
}


export default User;