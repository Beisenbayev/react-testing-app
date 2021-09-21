import React from 'react';

import {
   StyledUserDataLine, UserDataTitle, UserDataText
} from './UserDataLine.style.js';

const UserDataLine = ({ title, text, ...props }) => {
   return (
      <StyledUserDataLine>
         <UserDataTitle>{title}</UserDataTitle>
         <UserDataText>{text}</UserDataText>
      </StyledUserDataLine>
   );
}


export default UserDataLine;