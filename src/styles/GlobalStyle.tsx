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
            background: linear-gradient(to bottom, #fff, #1bbae2);
          }
        `}
      />
    </>
  );
};
