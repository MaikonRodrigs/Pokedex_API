import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .2s linear;
    }
    html, border-style, #root {
        max-height: 100vh;
        max-width: 100%;
        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        outline: none;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
				Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html {
        background: var(--gray-light);
        color: var(--secondary);
        /* background-image: linear-gradient(to bottom, #6b6bd1, #6c77d7, #6f83dc, #748fe0, #7b9ae3, #73a7ec, #6db3f3, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1); */
    }
    :root {
    --primary: #000;
    --secondary: #15181C;
    --white: #D9D9D9;
    --black: #3c3c3c;
    --gray: #7A7A7A;
    --gray-light: #f2f2f2;

    --error: #ED6A5E;
    --shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
    }
`;