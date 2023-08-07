import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;

  align-items: center;

  width: 100%;
  height: 220px;

  background: rgb(250,11,91);
  background: linear-gradient(90deg, rgba(250,11,91,1) 0%, rgba(57,95,245,1) 100%, rgba(0,212,255,1) 100%);

  @media (max-width: 600px){
    flex-direction: column;
    height: auto;
  }
`;

export const Left = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 30%;
  /* height: 100%; */

  @media (max-width: 600px){
    display: none;
  }
`;

export const Center = styled.div`
  display: flex;
  
  width: 100%;
  height: 100%;

  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  /* padding: 20px 10px; */

  text-align: center;

  p:nth-child(2){
    max-width: 600px;
  }

  @media (max-width: 900px){
    height: auto;

    p:nth-child(2){
      max-width: 360px;
    }

    p:nth-child(3){
      display: none;
    }
  }

`;

// Right

export const Right = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;

  margin: 20px 10px;

  width: 500px;
  height: 100%;

  @media (max-width: 600px){
    width: auto;
    height: 100%;

    padding: 10px;
  }
`;

export const Techs = styled.div`
  display: flex;

  margin: 10px 0;

  /* justify-content: center; */
  /* align-items: center; */

  span {
    width: 2px;
    height: 2px;

    border-radius: 2px;

    margin: 7px 10px;

    background-color: #fff;
  }
`;

export const Tech = styled.div`
  display: flex;

  flex-direction: column;

  /* justify-content: center; */
  align-items: center;

  text-align: center;

  /* margin-left: 5px; */
`;
