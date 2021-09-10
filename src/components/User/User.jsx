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

   //if server API is correct 
   //const mainUserdata = useSelector((state) => state.userPage.data);
   //const errorMessage = useSelector((state) => state.userPage.errorMessage);

   useEffect(() => {
      dispatch(setUserData(username));
   }, [username]);

   //temporary object for checking
   const mainUserdata = {
      id: 0,
      username: 'snzhxone',
      firstName: 'Санжар',
      lastName: 'Икембаев',
      email: 'snzhxone@pochta.kz',
      password: 'qwerty123ASD',
      phone: '+7 707 707 70 70',
      status: 2,
   }

   const { id, status, ...userObj } = mainUserdata;

   const userDataTitles = {
      firstName: 'Имя',
      lastName: 'Фамиля',
      username: 'Логин',
      email: 'Почта',
      password: 'Пароль',
      phone: 'Номер телефона'
   };

   const userData = Object.keys(userDataTitles).map((title, index) => {
      return <UserDataLine key={index}
         title={userDataTitles[title]}
         text={userObj[title]} />
   })

   return (
      <div className={s.block}>
         <h1 className={cn(s.title, 'main-title')}>Поиск данных</h1>
         
         
         {/* {mainUserdata ?
            <div className={s.userData}>
               {userData}
            </div> :
            <p className={s.errorText}>{errorMeesage}</p>
         }*/} {/*after correcting api */}


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