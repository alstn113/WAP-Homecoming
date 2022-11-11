import styled from '@emotion/styled';

export const Image1 = styled.img`
  position: absolute;
  top: 780px;
  left: 220px;
  width: 350px;
  height: 350px;
  z-index: 10000;
  @media screen and (max-width: 580px) {
    top: 2450px;
    left: 50%;
    width: 150px;
    height: 150px;
  }
`;

export const Image2 = styled.img`
  position: absolute;
  top: 1450px;
  right: 200px;
  width: 350px;
  height: 350px;
  z-index: 10000;
  @media screen and (max-width: 580px) {
    visibility: hidden;
  }
`;
