import React, { Fragment } from 'react';

import * as Styles from './styles';

import { Text, Icon, Tag } from '../../../common';
import { skills } from './constants';

import { AWS, Expo, Figma, Jest, Next, Redux, Typescript, Vite } from '../../../assets/svg';

const Tools = ({ tool }: { tool: string }) => {
  if(tool === 'next')
    return <Next width={20} height={20} fill='black' />;

  if(tool === 'vite')
    return <Vite width={20} height={20} />;

  if(tool === 'expo')
    return <Expo width={20} height={20} />;

  if(tool === 'ts')
    return <Typescript width={20} height={20} fill='#3178c6' />;

  if(tool === 'redux')
    return <Redux width={20} height={20} />;
    
  if(tool === 'jest')
    return <Jest width={20} height={20} />;

  if(tool === 'figma')
    return <Figma width={20} height={20} fill='#3178c6' />;

  if(tool === 'aws')
    return <AWS width={30} height={30} fill='#3178c6' />;

  return null;
};

const Skills: React.FC = () => {
  return (
    <Fragment>
      <Tag title='Skills' />
      <Styles.Container>
        {skills.map(({ title, tech, icon, description, logos }) => (
          <Styles.Card>
            <Icon name={icon} />
            <br />
            <Text fontSize='normal' fontWeight='semi_bold' color='charleston_green'>{title}</Text>
            <br />
            <Text fontSize='extra_light' fontWeight='normal' color='dark_gray'>{description}</Text>
            <br />
            <span>
              {logos.map((items, index) => <Tools key={index} tool={items.svg} />)}
            </span>
          </Styles.Card>
        ))}
      </Styles.Container>
    </Fragment>
  );
};

export default Skills;
