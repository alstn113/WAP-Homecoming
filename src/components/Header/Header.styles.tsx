import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: linear-gradient(to bottom, #5591ea, #8fdbee);
  @media screen and (max-width: 580px) {
    height: 100px;
  }
`;

export const Title = styled.h1`
  @media screen and (max-width: 580px) {
    font-size: 40px;
  }
  font-size: 72px;
  color: #fff;
`;
export const Description = styled.h1`
  @media screen and (max-width: 580px) {
    font-size: 30px;
  }
  font-size: 40px;
  color: #fff;
`;
