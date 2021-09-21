import styled from "styled-components";
import { Form } from "formik";

export const StyledRegistrationForm = styled(Form)`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-row-gap: 15px;
   grid-column-gap: 30px;

   button {
      width: 100%;
      align-self: end;
   }

   @media screen and (max-width: 768px) {
      & {
         grid-template-columns: 1fr;
         grid-row-gap: 15px;
      }
   }
`;