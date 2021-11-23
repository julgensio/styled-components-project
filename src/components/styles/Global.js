import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

    * {
        box-sizing: border-box
    }

    body {
        font-family: 'Anton', sans-serif;
        background: ${
    ({theme}) => theme.color.body
}
    }

`

export default GlobalStyles
