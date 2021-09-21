import styled from "styled-components";
import Preloader from "./Preloader";

export default styled(Preloader)`
   width: 100%;
   height: 100vh;
   margin: -80px 0 -15px;
   user-select: none;
   pointer-events: none;
   
   img {
      width: 100%;
      height: 100%;
   }
`;