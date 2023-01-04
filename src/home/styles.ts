import styled from 'styled-components';
import Wallpaper from "../assets/wallpaper2.png";

export const Container = styled.div`
  display: flex;

  background-image: url(${Wallpaper});
  background-repeat:no-repeat;
  background-position:center;

  width: 100%;
  height: 100vh;


  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageMe = styled.img`
  width: 300px;
  height: 300px;
`;