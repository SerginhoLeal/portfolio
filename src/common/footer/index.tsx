import React from 'react';

import * as Styles from './styles';

import { Text } from '..';
import { Figma, Github, MarksLogos, Trello, VSCode, Vercel, React as ReactSvg, Next, Typescript, Styled } from '../../assets/svg';
import { Tools } from './tools';

export const Footer: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Left>
        <MarksLogos />
      </Styles.Left>

      <Styles.Center>
        <Text fontSize='bold' fontWeight='bold' spacing='medium'>Mark's Joias</Text>
        <Text fontSize='extra_light' fontWeight='light'>
          Esse e-commerce encontra-se em desenvolvimento e o meu objetivo é ter uma renda extra, novas ideias estão por vir mas sempre procuro fazer uma pesquisa profunda para não perder tempo refazendo código.
        </Text>
        <Text fontSize='thin' fontWeight='light'>©2023-2023 Todos os direitos reservados <strong>MARK’S JOIAS</strong></Text>
      </Styles.Center>

      <Styles.Right>
        <Tools icon={Github} link="portal-b2c-marks" url='https://github.com/SerginhoLeal/portal-b2c-marks' />
        <Tools icon={Figma} link="figma.com/mark's joias" url="https://www.figma.com/file/CDL5uzDyjshTSSiyxlsva8/Mark's-Joias?type=design&node-id=112%3A206&mode=design&t=4mcpEtHGgnKVzOxB-1" />
        <Tools icon={Trello} link="trello.com/mark's joias" url='https://trello.com/invite/b/cLVNHiys/ATTI77b7bb70843a814a81fae5699f958704879A7449/marks-joias'/>
        <Tools icon={Vercel} link="portal-b2c-marks.vercel.app" url='https://portal-b2c-marks.vercel.app/'/>

        <Styles.Techs>
          <Styles.Tech>
            <VSCode width={18} height={18} />
            <Text fontSize='extra_thin' fontWeight='bold'>VS</Text>
          </Styles.Tech>
          <span />
          <Styles.Tech>
            <ReactSvg width={18} height={18} />
            <Text fontSize='extra_thin' fontWeight='bold'>React</Text>
          </Styles.Tech>
          <span />
          <Styles.Tech>
            <Next fill='white' width={18} height={18} />
            <Text fontSize='extra_thin' fontWeight='bold'>Next</Text>
          </Styles.Tech>
          <span />
          <Styles.Tech>
            <Typescript fill='white' width={18} height={18} />
            <Text fontSize='extra_thin' fontWeight='bold'>TS</Text>
          </Styles.Tech>
          <span />
          <Styles.Tech>
            <Styled fill='white' width={18} height={18} />
            <Text fontSize='extra_thin' fontWeight='bold'>Styled</Text>
          </Styles.Tech>
        </Styles.Techs>

      </Styles.Right>
    </Styles.Container>
  )
};