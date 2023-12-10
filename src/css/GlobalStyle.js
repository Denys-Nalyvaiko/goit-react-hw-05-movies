import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #fafafa;
  background-color: #252525;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

input,
textarea,
button {
  font-family: inherit;
  line-height: inherit;
}`;
