import styled from 'styled-components';
import Wallpaper from "../../../assets/img/wallpaper2.png";

export const Main = styled.main`
  display: flex;

  width: 100%;
  height: 95vh;

  justify-content: space-evenly;
  align-items: center;
  /* flex-direction: column; */
`;

export const Content = styled.div`
  position: relative;
`;

export const Hexagon = styled.div`
  position: absolute;

  top: -120px;
  left: 165px;
`;

export const Dodecaedro = styled.div`
  position: absolute;

  top: 00px;
  left: -80px;
`;

export const Nonagon = styled.div`
  position: absolute;

  top: 120px;
  right: -50px;
  
  z-index: -1;
`;

export const Title = styled.div``;

export const Image = styled.div``;

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