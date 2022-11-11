import styled from '@emotion/styled';

export const Image1 = styled.img`
  position: absolute;
  top: 780px;
  left: 10vw;
  width: 350px;
  height: 350px;
  z-index: 10000;
  @media screen and (max-width: 1169px) {
    display: none;
  }
`;

export const Image2 = styled.img`
  position: absolute;
  top: 1450px;
  right: 10vw;
  width: 350px;
  height: 350px;
  z-index: 10000;
  @media screen and (max-width: 1169px) {
    display: none;
  }
`;
