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

  /* padding: 10px; */

  background-color: #000000aa;
  /* box-shadow: .5px .5px 2px .5px #dedede; */
`;

export const Content = styled.div`
  display: flex;

  width: 90%;
  height: 90%;

  background-color: #fff;

  border-radius: 2px;
`;