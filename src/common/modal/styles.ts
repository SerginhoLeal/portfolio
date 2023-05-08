import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  display: flex;

  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #000000aa;
`;

export const Content = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 90%;
  height: 90%;

  background-color: #fff;

  border-radius: 2px;

  overflow-x: scroll;
`;

export const Button = styled.a`
  border: 1px solid #dedede;
  margin: 0;
  padding: 0;

  border-radius: 2px;
  margin: 10px;

  img {
    width: 250px;
    height: 100%;
    /* object-fit: contain; */
  }
`;