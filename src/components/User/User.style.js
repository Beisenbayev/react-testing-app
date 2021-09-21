import styled from "styled-components";

export const StyledUser = styled.div`
   max-width: 396px;
   margin: 0 auto;

   button {
      width: 100%;
   }
`;

export const UserData = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 15px;
   margin: 30px 0 20px;
   padding: 15px;
   border-radius: 10px;
   border: 1px solid #EDEDED;

   @media screen and (max-width: 425px) {
      & {
         grid-template-columns: 1fr;
      }
   }
`;

export const UserErrorText = styled.p`
   margin: 30px 0 20px;
   padding: 15px;
   border-radius: 10px;
   border: 1px solid #EDEDED;
`;