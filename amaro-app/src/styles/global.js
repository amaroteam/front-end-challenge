import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face {
    font-family: Gotham;
    font-style: normal;
    font-weight: 200;
    src: url(https://amaro.com/fonts/gotham-thin-webfont.woff2) format("woff2"),url(https://amaro.com/fonts/gotham-thin-webfont.woff) format("woff"),url(https://amaro.com/fonts/gotham-thin-webfont.ttf) format("truetype")
}

@font-face {
    font-family: Gotham;
    font-style: normal;
    font-weight: 400;
    src: url(https://amaro.com/fonts/gotham-book-webfont.woff2) format("woff2"),url(https://amaro.com/fonts/gotham-book-webfont.woff) format("woff"),url(https://amaro.com/fonts/gotham-book-webfont.ttf) format("truetype")
}

@font-face {
    font-family: Gotham;
    font-style: italic;
    font-weight: 400;
    src: url(https://amaro.com/fonts/gotham-bookitalic-webfont.woff2) format("woff2"),url(https://amaro.com/fonts/gotham-bookitalic-webfont.woff) format("woff"),url(https://amaro.com/fonts/gotham-bookitalic-webfont.ttf) format("truetype")
}

@font-face {
    font-family: Gotham;
    font-style: normal;
    font-weight: 600;
    src: url(https://amaro.com/fonts/gotham-medium-webfont.woff2) format("woff2"),url(https://amaro.com/fonts/gotham-medium-webfont.woff) format("woff"),url(https://amaro.com/fonts/gotham-medium-webfont.ttf) format("truetype")
}

@font-face {
    font-family: Gotham;
    font-style: normal;
    font-weight: 700;
    src: url(https://amaro.com/fonts/gotham-bold-webfont.woff2) format("woff2"),url(https://amaro.com/fonts/gotham-bold-webfont.woff) format("woff"),url(https://amaro.com/fonts/gotham-bold-webfont.ttf) format("truetype")
}


* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

body {
    background-color: #f4f4f4;
    color: #000;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-size: 14px Gotham, sans-serif;
}

#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 32px 64px;
}

button {
    cursor: pointer;
}
`;
