import React, { Fragment } from 'react';

import * as Styles from './styles';

import { Text, Icon, Tag } from '../../../common';
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
                <Icon
                  name={items.svg}
                  styles={{ height: items.svg === 'health' ? 40 : 20, margin: '0px 10px', cursor: 'pointer' }} 
                  onPress={() => window.open(items.url, '_blank')} />
                )}
            </span>
          </Styles.Card>
        ))}
      </Styles.Container>
    </Fragment>
  );
};

export default Skills;
