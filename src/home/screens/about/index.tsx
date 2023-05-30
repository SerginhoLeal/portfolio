import React, { Fragment } from 'react';

import * as Styles from './styles';

import About_me_img from "../../../assets/img/about_me_img.png";
import { Tag, Text } from '../../../common';

import { GitHubProps } from './types';

interface Props {
  github: Array<GitHubProps>
};

const About: React.FC<Props> = ({ github }: Props) => {
  const filterArrayFrameworks = github.map(items => items.topics).filter(items => items.length !== 0);
  const counter: any = {};
  const result: Array<any> = [];

  for (let i = 0; i < filterArrayFrameworks.length; i++) {
    for (let j = 0; j < filterArrayFrameworks[i].length; j++) {
      const item = filterArrayFrameworks[i][j];
      if (item in counter) {
        counter[item]++;
      } else {
        counter[item] = 1;
      }
    }
  }

  for (const [chave, valor] of Object.entries(counter)) result.push({ name: chave, quantity: valor });

  const counts = result.sort((a, b) => b.quantity - a.quantity);

  return (
    <Fragment>
      <Tag title='About me' />
      <Styles.Container>
        <img src={About_me_img} />

        <Styles.Skills>
          <Styles.Presentation>
            <Text color='text' fontSize='small'>
              Ola, o meu nome é Sérgio e sou um desenvolvedor web & mobile com os frameworks React, React-Native e Node.js.<br/><br/>
              Possuo dois 1 anos e 10 meses de experiência com desenvolvimento web com React e 7 meses com desenvolvimento mobile com React-Native.<br/><br/>
              Sigo firme na academia, faculdade e nos cursos da Udemy, Rocketseat e KNN IDIOMAS.<br/><br/>
              Atualmente tenho interesse em trabalhar com o desenvolvimento mobile e web no formato remoto para eu conseguir auxiliar com o meu desenvolvimento pessoal, mas estou aberto para novas idéias no meu formato de trabalho.
            </Text>
          </Styles.Presentation>

          <Styles.Graph>
            {counts.map((items, index) => index < 7 && (
              <Styles.ContentTrack>
                <Text fontSize='small'>{items.name} - {items.quantity} Projects</Text>
                <Styles.Track>
                  <Styles.Knob progress={(items.quantity * 100) / counts[0].quantity} />
                </Styles.Track>
              </Styles.ContentTrack>
            ))}
          </Styles.Graph>
        </Styles.Skills>
      </Styles.Container>
    </Fragment>
  );
};

export default About;

/*
  I'm Sérgio, front-end developer and designer from Brazil - Minas Gerais - Contagem.<br /><br />
  I have two years of experience with mobile (React-Native) and web (React.js) development, I have unfinished courses that I intend to finish involving Git, GitHub, Docker, AWS and Google Cloud. <br /><br />
  My biggest goal now is to finish my English course at KNN Idiomas and work as a mobile developer, I'm open to continue developing on the web and mobile.
*/