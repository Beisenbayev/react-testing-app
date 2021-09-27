import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import MetaDeclaration from '../../utils/metaDeclaration';
import {
   getUserDataSelector,
   getIsFetchingSelector
} from '../../redux/selectors/user-selector.js';
import {
   getUserDataAC as getUserData,
} from '../../redux/reducers/user-reducer.js';

import MainTitle from '../../styles/MainTitle.style.js';
import { StyledUser, UserData, UserErrorText } from './User.style.js';

import Wrapper from '../common/Wrapper/Wrapper.style.js';
import Preloader from '../common/Preloader/Preloader.style.js';
import Button from '../common/Button/Button.style.js';
import UserDataLine from './UserDataLine/UserDataLine';

const User = (props) => {
   const dispatch = useDispatch();
   const userDataObj = useSelector(state => getUserDataSelector(state));
   const isFetching = useSelector(state => getIsFetchingSelector(state));

   const { userId } = useParams();

   useEffect(() => {
      dispatch(getUserData(userId));
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
      <Wrapper>
         <StyledUser>
            <MetaDeclaration title={'User'} />
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
      </Wrapper>
   );
}


export default User;