import styled from "styled-components";
import BgImg from "./BgImg";

export default styled(BgImg)`
   grid-area: bgImg;

   img {
      width: 100%;
      height: 100%;
   }

   @media screen and (max-width: 992px) {
      & {
         width: 60%;
         margin: auto;
      }
   }


   @media screen and (max-width: 768px) {
      & {
         width: 80%;
      }
   }


   @media screen and (max-width: 425px) {
      & {
         width: 100%;
      }
   }
`;