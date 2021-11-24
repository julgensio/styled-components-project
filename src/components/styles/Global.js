import { createGlobalStyle } from 'styled-components';

// ! Global styles
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Anton', sans-serif;
        background: ${({ theme }) => theme.color.body};
        color : hsl(192, 100%, 9%);
        font-size: 1.15em;
    }

    p{
        opacity: 0.9;
        line-height: 1.5;
        
    }

    img {
        max-width: 100%;
    }

    h1 {
        padding-bottom: 1rem;
        border-bottom: 3px solid #000;
    }

`;

export default GlobalStyles;
