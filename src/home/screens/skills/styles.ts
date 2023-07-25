import styled from 'styled-components';

export const Container = styled.section`
  display: flex;

  justify-content: space-between;

  width: 100%;

  padding: 50px 0;

  @media screen and (max-width: 700px) {
    align-items: center;
    flex-direction: column;
  };
`;

export const Card = styled.div`
  display: flex;
  position: relative;

  margin: 5px;

  width: 300px;
  height: 200px;

  border-radius: 2px;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  box-shadow: .5px .5px 2px .5px #dedede;

  span {
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: #fff;

    width: 100%;
  }
`;
