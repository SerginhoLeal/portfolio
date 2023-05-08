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
              I'm Sérgio, front-end developer and designer from Brazil - Minas Gerais - Contagem.<br /><br />
              I have two years of experience with mobile (React-Native) and web (React.js) development, I have unfinished courses that I intend to finish involving Git, GitHub, Docker, AWS and Google Cloud. <br /><br />
              My biggest goal now is to finish my English course at KNN Idiomas and work as a mobile developer, I'm open to continue developing on the web and mobile.
            </Text>
          </Styles.Presentation>

          <Styles.Graph>
            {counts.map((items, index) => index < 5 && (
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