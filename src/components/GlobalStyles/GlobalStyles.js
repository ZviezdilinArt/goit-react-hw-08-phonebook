import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Helvetica Neue';
  font-size:18px;
  background-color: #e3dbcc	;
  /* background-color: #d4d4fa	 */
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
a {
  color: white;
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
}

p,h1,h2,h3 {
  margin: 0;
}
.error-message {
  font-size: 16px;
  color:red;
}
`;