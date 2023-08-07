import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  /* justify-content: center; */
  align-items: center;

  margin: 10px 0;

  a {
    display: flex;

    justify-content: center;
    align-items: center;

    text-decoration: none;
  }

  span {
    width: 2px;
    height: 2px;

    border-radius: 2px;

    margin: 0 10px;

    background-color: #fff;
  }
`;