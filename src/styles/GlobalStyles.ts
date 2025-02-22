import { createGlobalStyle } from "styled-components";

const colors = {
  white: "hsl(0, 100%, 100%)",
  blue: "hsl(200, 80%, 56%, 1)",
  pink: "hsl(330, 100%, 70%, 1)",
} as const;

type ColorsObject = typeof colors;
export type Colors = keyof ColorsObject;

export const GlobalStyles = createGlobalStyle`
:root {

  *:focus {
  outline: none;
}

// Global colors
  &, &.light-mode {
      /* --blue: hsl(200, 80%, 56%, 1);
      --pink: hsl(330, 100%, 70%, 1); */

      --blue: ${colors.blue};
      --pink: ${colors.pink};
  }
  
  /* &.dark-mode {
  } */



/* ================== MEDIA QUERIES ================== */
&{
  --desktop: 93.750625rem; /* 1500.01px */ /* min-width */
  --laptop: 93.75rem; /* 1500px */ /* max-width */ /* design for laptop*/ 
  --tablet: 68.75rem;/* 1100px */ /* max-width */
  --phone: 34.375rem;/* 550px */ /* max-width */
}



/* ================================================== */
&{
/* --header-height: 79px; */ // use if needed
}

}

/* ================== CSS RESET ================== */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background: var(--bg);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
}

/* ================== CSS RESET ENDS ================== */


/* ================== CUSTOM FONTS ================== */

@font-face {
font-family: 'Poppins';
font-style: normal;
font-weight: 400; // Normal
src: local(''),
  url('/fonts/poppins-regular-webfont.woff2') format('woff2');
}

@font-face {
font-family: 'Poppins';
font-style: normal;
font-weight: 500; // Medium
src: local(''),
  url('/fonts/poppins-medium-webfont.woff2') format('woff2');
}

@font-face {
font-family: 'Poppins';
font-style: normal;
font-weight: 600; // Semi Bold
src: local(''),
  url('/fonts/poppins-semibold-webfont.woff2') format('woff2');
}
`;
