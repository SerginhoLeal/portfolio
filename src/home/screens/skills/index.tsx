import React, { Fragment } from 'react';

import * as Styles from './styles';

import { Text, Icon, Tag, Modal } from '../../../common';
import { skills } from './constants';

const Skills: React.FC = () => {
  return (
    <Fragment>
      <Tag title='Skills' />
      <Styles.Container>
        {skills.map(({ title, tech, icon, description, logos }) => (
          <Styles.Card>
            <Icon name={icon} />
            <br />
            <Text fontSize='small' fontWeight='bold' color='charleston_green'>{title}</Text>
            <br />
            <Text fontSize='xsmall' color='dark_gray'>{description}</Text>
            <span>
              {logos.map(items =>
                <img
                  src={items.svg}
                  onClick={() => window.open(items.url, '_blank')}
                  style={{ height: 20, margin: '0px 10px', cursor: 'pointer' }}
                />
              )}
            </span>
          </Styles.Card>
        ))}
      </Styles.Container>
    </Fragment>
  );
};

export default Skills;
