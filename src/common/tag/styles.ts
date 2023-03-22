import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstLine = styled.div`
  width: 80%;
  height: 2px;

  border-radius: 5px;

  ${({ }) => css`
    background-color: #FF674D;
  `};
`;
export const SecondLine = styled.div`
  width: 60%;
  height: 2px;

  margin-top: 3px;

  border-radius: 5px;

  ${({ }) => css`
    background-color: #FF674D;
  `};
`;