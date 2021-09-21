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

import MainTitle from '../../styles/MainTitle.style.js';
import { StyledUser, UserData, UserErrorText } from './User.style.js';

import Preloader from '../common/Preloader/Preloader.style.js';
import Button from '../common/Button/Button.style.js';
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
      <StyledUser>
         <MainTitle>Поиск данных</MainTitle>
         {userData ?
            <UserData>
               {userData}
            </UserData> :
            <UserErrorText>user not found</UserErrorText>
         }
         <NavLink to={'/'}>
            <Button>На главную</Button>
         </NavLink>
      </StyledUser>
   );
}


export default User;