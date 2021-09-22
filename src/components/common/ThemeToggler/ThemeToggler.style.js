import styled from "styled-components";

const ThemeToggler = styled.input.attrs(props => ({
   type: 'checkbox',
}))`  
   position: absolute;
   right: 25px;
   bottom: 25px;
   display: block;
   width: 65px;
   height: 30px;
   background: ${props => props.theme.toggler.background};
   border-radius: 15px;
   appearance: none;
   cursor: pointer;

   &::after {
      content: '';
      position: absolute;
      top: 2.5px;
      left: 2.5PX;
      display: block;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background: #fff;
      transform: translateX(0);
      transition: 0.4s;
   }

   &:checked::after {
      background: #37474f;
      transform: translateX(35px);
   }

   @media screen and (max-width: 768px) {
      & {
         top: 25px;
      }
   }
`;


export default ThemeToggler;