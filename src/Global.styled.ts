import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    :root {
      box-sizing:border-box;
    }

    *,
    ::before,
    ::after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        sans-serif;
    }

`;

export default Global;
