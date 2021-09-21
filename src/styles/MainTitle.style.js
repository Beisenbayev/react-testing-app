import styled from "styled-components";

const MainTitle = styled.h1`
   font-weight: 800;
	font-size: 36px;
	line-height: 43.2px;
	letter-spacing: -0.025em;
	color: #000;

   @media screen and (max-width: 992px) {
      & {
         line-height: 120%;
      }
   }

   @media screen and (max-width: 768px) {
      & {
         font-size: 24px;
      }
   }
`;


export default MainTitle;