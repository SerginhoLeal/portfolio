import styled from 'styled-components';

export const Main = styled.main`
  display: flex;

  width: 100%;
  height: 95vh;

  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;

    svg {
      display: none;
    }

    /* p {
      font-size: 2px;
    } */
  }
`;

export const Content = styled.div`
  position: relative;

  text-align: center;
`;

export const Image = styled.div`
  /* width: 100%; */
  /* display: flex; */

  @media screen and (max-width: 1100px) {
    img {
      width: 330px;
    }
  }
`;

export const Hexagon = styled.div`
  position: absolute;

  top: -120px;
  left: 165px;

  @media screen and (max-width: 1100px) {
    svg {
      width: 150px;
    }
  }
`;

export const Dodecaedro = styled.div`
  position: absolute;

  top: 00px;
  left: -80px;

  @media screen and (max-width: 1100px) {
    top: 00px;
    left: -50px;
    svg {
      width: 150px;
    }
  }
`;

export const Nonagon = styled.div`
  position: absolute;

  top: 120px;
  right: -50px;
  
  z-index: -1;

  @media screen and (max-width: 1100px) {
    top: 100px;
    right: -10px;

    svg {
      width: 150px;
    };
  }
`;

export const Title = styled.div``;

export const ImageMe = styled.img`
  width: 300px;
  height: 300px;
`;

export const Contacts = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 10px;

  img {
    padding: 5px;
    margin: 2px;

    cursor: pointer;

    z-index: 1;
  }
`;