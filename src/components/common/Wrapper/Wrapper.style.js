import styled from "styled-components";

const Wrapper = styled.div`
   position: relative;
   box-sizing: content-box;
   width: fit-content;
   margin: 0 auto;
   padding: 25px;
   border-radius: 15px;
   background: ${props => props.theme.background};
`;


export default Wrapper;