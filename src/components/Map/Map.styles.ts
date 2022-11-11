import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto 150px;
`;

export const Container = styled.div`
  border-top: 10px solid #fff;
  border-bottom: 10px solid #fff;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  height: 500px;
  width: 80%;
  @media screen and (max-width: 580px) {
    border-right: none;
    border-left: none;
    width: 100%;
    height: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #fff;
`;
