import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${theme.colors.main};
  line-height: 1.2;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

button {
  background-color: unset;
  border: none;
} 

section {
  background-color: ${theme.colors.primaryBg};
  padding: 0 0 144px 0;
}

`;
