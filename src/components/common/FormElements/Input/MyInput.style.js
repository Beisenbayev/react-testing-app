import styled from "styled-components";

export const StyledLabel = styled.label`
   display: block;
   margin-bottom: 5px;
   font-size: 18px;
   line-height: 1;
   color: #BDBDBD;

   &::first-letter {
      text-transform: uppercase;
   }
`;

export const StyledInput = styled.input`
   width: 100%;
   height: 60px;
   padding: 10px;
   border: 1px solid ${props => props.hasError ? '#ac5454' : '#EDEDED'};
   border-radius: 10px;
   font-size: 18px;
   background: #FFFFFF;
   color: #303030;
   
   @media screen and (max-width: 768px) {
      & {
         width: 100%;
      }
   }
`;

export const StyledErrorMessage = styled.div`
   display: inline-block;
   padding: 0 0 0 10px;
   font-size: 16px;
   color: #ac5454;
`;

