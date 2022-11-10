import { Global, css } from '@emotion/react';
import reset from './reset';

export const GlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          ${reset}
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #333333;
          }
          input {
            outline: none;
            border: none;
          }
          button {
            border: none;
            outline: none;
            background: none;
            cursor: pointer;
          }
          a {
            text-decoration: none;
            color: #000;
          }
        `}
      />
    </>
  );
};
