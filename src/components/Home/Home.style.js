import styled from "styled-components";

export const StyledHome = styled.div`
   display: grid;
   grid-template-areas: 'content bgImg';
   grid-template-columns: 6.5fr 4.5fr;
   align-items: center;
   max-width: 1080px;
   margin: 0 auto;

   @media screen and (max-width: 992px) {
   & {
      display: grid;
      grid-template-areas: 'bgImg' 'content';
      grid-template-columns: 1fr;
      grid-column-gap: 20px;
      align-items: center;
   }
}
`;

export const HomeContent = styled.div`
   grid-area: content;
`;

export const HomeText = styled.p`
   max-width: 450px;
   margin: 20px 0 60px;

   @media screen and (max-width: 992px) {
      & {
         max-width: none;
      }
   }

   @media screen and (max-width: 768px) {
      & {
         font-size: 18px;
         margin: 20px 0 30px;
      }
   }
`;

export const HomeButtons = styled.div`
   display: flex;

   a {
      margin: 0 30px 0 0;
      &:last-child {
         margin: 0;
      }
   }

   @media screen and (max-width: 768px) {
      & {
         flex-direction: column;
         a {
            margin: 0 0 15px 0;
         }
      }
   }
`;