import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto 150px;
`;

export const Container = styled.div`
  border: 10px solid #fff;
  height: 500px;
  width: 80%;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #fff;
`;
