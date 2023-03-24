import styled, { css } from 'styled-components';
import { ProgressProps } from './types';

export const Container = styled.section`
  position: relative;
  display: flex;

  width: 100%;
  /* height: 100vh; */

  padding: 50px 0;

  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  };
`;

export const Skills = styled.div`
  display: flex;

  align-items: center;

  padding: 10px;

  border-radius: 2px;
  box-shadow: .5px .5px 2px .5px #dedede;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    flex-direction: column;
  };
`;

export const Graph = styled.div`
  display: flex;

  flex-direction: column;

  margin: 20px;

  height: 100%;
`;

export const ContentTrack = styled.div`
  
`;

export const Track = styled.div`
  width: 300px;
  height: 5px;

  margin: 5px 0;

  border-radius: 5px;

  ${({ }) => css`
    background-color: #EDEDED;
  `};
`;

export const Knob = styled.div<ProgressProps>`
  height: 5px;

  border-radius: 5px;

  ${({ theme, progress }) => css`
    width: ${progress}%;
    background-color: #FF674D;
  `};
`;
