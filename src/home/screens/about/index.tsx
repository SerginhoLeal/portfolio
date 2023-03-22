import React, { Fragment } from 'react';

import * as Styles from './styles';

import About_me_img from "../../../assets/img/about_me_img.png";
import { Tag, Text } from '../../../common';

import { GitHubProps } from './types';

interface Props {
  github: Array<GitHubProps>
};

const About: React.FC<Props> = ({ github }: Props) => {

  const filterLanguage = github
    .map(items => items.language)
    .filter((mediaType, index, array) => array.indexOf(mediaType) === index);

  const counts = filterLanguage
    .map(mediaType => ({
      type: mediaType,
      count: github.filter(item => item.language === mediaType).length,
      progress: github.filter(item => item.language === mediaType).length * ((Math.max(github.map(item => item.language === mediaType).length) / 2) * 1)
    }));

  return (
    <Fragment>
      <Tag title='About me' />
      <Styles.Container>
        <img src={About_me_img} />

        <Styles.Skills>
          <Text color='text' fontSize='small'>I'm Sérgio, front-end developer and designer <br/> from Brazil - Minas Gerais - Contagem.</Text>

          <Styles.Graph>
            {counts.map((items, index) => index < 5 && (
              <Styles.ContentTrack>
                <Text fontSize='small'>{items.type} - {items.count} Projects</Text>
                <Styles.Track>
                  <Styles.Knob progress={items.progress} />
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