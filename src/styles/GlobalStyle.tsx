import { Global, css } from '@emotion/react';
import reset from './reset';

export const GlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          ${reset}
          html {
            box-sizing: border-box;
            font-family: 'Jua', sans-serif;
          }
          body {
            background: linear-gradient(to bottom, #fff, #1bbae2);
          }
          a {
            text-decoration: none;
            color: #fff;
          }
        `}
      />
    </>
  );
};
