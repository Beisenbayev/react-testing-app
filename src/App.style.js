import styled from "styled-components";

const StyledApp = styled.div`
   padding: 80px 15px 15px;


   @media screen and (max-width: 992px) {
      & {
         padding: 40px 15px 15px;
      }
   }


   @media screen and (max-width: 768px) {
      & {
         padding: 20px 5px 15px;
      }
   }
`;


export default StyledApp;