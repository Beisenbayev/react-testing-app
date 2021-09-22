import styled from "styled-components";

const Button = styled.button`
   width: 255px;
   height: 60px;
   border-radius: 10px;
   font-family: 'Arial';
   font-weight: bold;
   font-size: 18px;
   line-height: 25px;
   background: #B12341;
   color: #FFFFFF;
   cursor: pointer;

   &:hover {
      background: #C13451;
   }
   &:disabled,
   &[disabled] {
      border: 1px solid #999999;
      background: #cccccc;
         color: #666666;
   }

   @media screen and (max-width: 768px) {
      & {
         width: 100%;
      }
   }
`;


export default Button;