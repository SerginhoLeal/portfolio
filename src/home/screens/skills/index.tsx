import React, { Fragment } from 'react';

import * as Styles from './styles';

import { Text, Icon, Tag, Modal } from '../../../common';
import { skills } from './constants';

const Skills: React.FC = () => {
  return (
    <Fragment>
      <Tag title='Skills' />
      <Styles.Container>
        {skills.map(({ tech, icon, description }) => (
          <Styles.Card>
            <Icon name={icon} />
            <br />
            <Text fontSize='small' fontWeight='bold' color='charleston_green'>{tech}</Text>
            <br />
            <Text fontSize='xsmall' color='dark_gray'>{description}</Text>
          </Styles.Card>
        ))}
      </Styles.Container>
      {/* <Modal /> */}
    </Fragment>
  );
};

export default Skills;
