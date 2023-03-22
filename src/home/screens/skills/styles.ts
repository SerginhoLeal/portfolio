import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;

  justify-content: center;

  width: 100%;

  padding: 50px 0;
`;

export const Card = styled.button`
  display: flex;

  padding: 1px;
  margin: 0 5px;

  width: 300px;
  height: 200px;

  border-radius: 2px;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  border: 0;
  cursor: pointer;

  background-color: #fff;
  box-shadow: .5px .5px 2px .5px #dedede;
`;
