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
      font-family: 'Roboto', sans-serif;
    }

`;

export default Global;
