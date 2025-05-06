// Styled Components
import Styled, { createGlobalStyle } from 'styled-components';

// React Toastify
import 'react-toastify/dist/ReactToastify.css';

// Config Colors
import * as Colors from '../config/colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${Colors.primaryColorDark};
    color: ${Colors.primaryColor};
    font-size: 16px;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${Colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  // Toastify from css suecess
  body .Toastify__toast-container .Toastify__toast-success {
    background: ${Colors.successColor};
  }

  // Toastify from css error
  body .Toastify__toast-container .Toastify__toast-error {
    background: ${Colors.errorColor};
  }
`;

// Container Global
export const Container = Styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
