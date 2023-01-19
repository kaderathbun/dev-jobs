import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root {
  --width-small: 85%;
  --width-large: 80%;

  --theme-primary-violet: #5964E0;
  --theme-primary-light-violet: hsl(235, 82%, 77%);
  --theme-primary-dark-blue: hsl(219, 29%, 14%);
  --theme-primary-midnight: hsl(220, 29%, 10%);
  --theme-secondary-midnight: hsl(0, 0%, 100%);
  --theme-secondary-light-grey: hsl(210, 22%, 96%);
  --theme-secondary-grey: hsl(212, 23%, 69%);
  --theme-secondary-dark-grey: hsl(214, 17%, 51%);
}

/* CSS Reset
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

/* Font sizing base 10 */
html {
  /* 10px */
  font-size: 62.5%;
}

body {
  /* 16px */
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Kumbh Sans', sans-serif;
  background-color: ${(props) => props.theme.body};

}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-width: 375px;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`
