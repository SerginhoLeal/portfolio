import styled, { css } from 'styled-components';
import { ProgressProps } from './types';

export const Container = styled.section`
  position: relative;
  display: flex;

  width: 100%;
  /* height: 100vh; */

  padding: 50px 0;

  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  };
`;

export const Skills = styled.div`
  display: flex;

  width: 70%;

  align-items: center;

  padding: 10px;

  border-radius: 2px;
  box-shadow: .5px .5px 2px .5px #dedede;

  @media screen and (max-width: 1000px) {
    width: 60%;
    margin-top: 20px;
    flex-direction: column;
  };

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  };
`;

export const Graph = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;

  margin: 20px;

  height: 100%;

  width: 50%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  };
`;

export const ContentTrack = styled.div`
  
`;

export const Track = styled.div`
  width: 300px;
  height: 5px;

  margin: 5px 0;

  border-radius: 5px;

  background-color: #EDEDED;

  @media screen and (max-width: 1000px) {
    width: 100%;
  };
`;

export const Knob = styled.div<ProgressProps>`
  height: 5px;

  border-radius: 5px;

  ${({ theme, progress }) => css`
    width: ${progress}%;
    background-color: #FF674D;
  `};
`;

export const Presentation = styled.div``;

export const Background = styled.div`
  display: flex;

  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  align-items: center;
  justify-content: center;
`;