import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
   getUserDataSelector,
   getIsFetchingSelector
} from '../../redux/selectors/user-selector.js';
import {
   setUserDataThunkCreater as setUserData,
} from '../../redux/reducers/user-reducer.js';
import cn from 'classnames';
import s from './User.module.css';

import Preloader from '../common/Preloader/Preloader';
import Button from '../common/Button/Button';
import UserDataLine from './UserDataLine/UserDataLine';

const User = (props) => {
   const dispatch = useDispatch();
   const userDataObj = useSelector(state => getUserDataSelector(state));
   const isFetching = useSelector(state => getIsFetchingSelector(state));

   const { userId } = useParams();

   useEffect(() => {
      dispatch(setUserData(userId));
   }, [userId]);

   const userDataTitles = {
      first_name: 'Имя',
      last_name: 'Фамиля',
      id: 'Идентификатор',
      email: 'Почта',
   };

   const userData = userDataObj ? Object.keys(userDataTitles).map((title, index) => {
      return <UserDataLine key={index}
         title={userDataTitles[title]}
         text={userDataObj[title]} />
   }) : undefined;

   if (isFetching) return <Preloader />

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