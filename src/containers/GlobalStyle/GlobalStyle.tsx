import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .firebaseui-container .firebaseui-card-content {
    padding: 0;
  }

  .firebaseui-container .firebaseui-idp-list {
    margin: 0;
  }

  .firebaseui-container .firebaseui-idp-list>.firebaseui-list-item {
    margin: 0;
  }
`;

export default GlobalStyle;
