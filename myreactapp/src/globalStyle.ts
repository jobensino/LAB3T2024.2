import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: #b4b2b4;
    font-family: Arial, Helvetica, sans-serif;
  }
  main {
    display: flex;
    flex-direction: column;
    
    height: 100%;

    justify-content: center;
    align-items: center;
  }
`;