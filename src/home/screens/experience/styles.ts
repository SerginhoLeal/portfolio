import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;

  justify-content: center;

  width: 100%;

  padding: 50px 0;
`;

export const Card = styled.div`
  display: flex;

  padding: 1px;
  margin: 0 5px;

  width: 500px;
  /* height: 200px; */

  border-radius: 2px;

  align-items: flex-start;
  flex-direction: column;
  justify-content: start;

  background-color: #fff;
  box-shadow: .5px .5px 2px .5px #dedede;
`;

export const Header = styled.div`
  display: flex;

  align-items: center;
`;

export const Timeline = styled.div`
  display: flex;

  margin: 5px 10px;

  flex-direction: column;
`;

export const Line = styled.div`
  width: 3px;
  height: 40px;

  border-radius: 2px;

  background-color: #FF674D;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const Info = styled.div`
  margin-left: 19px;

  /* display: ; */

  p {
    :nth-child(2){
      margin-top: -5px;
    }
  }
`;
