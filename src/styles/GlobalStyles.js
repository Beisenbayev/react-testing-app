import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      border: none;
      box-sizing: border-box;
   }
   body {
      font-family: 'Arial';
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 120%;
      background: ${props => props.theme.body};
      color: ${props => props.theme.text};
      user-select: none;
   }
   a { text-decoration: none; }
   li { list-style: none; }

   input, textarea { outline:none; }
   input:active, 
   textarea:active { outline:none; }
   :focus { outline:none; }

   a:active, 
   a:focus { outline: none; }

   textarea { resize:none; }
`;


export default GlobalStyles