import React, { Fragment } from 'react';

import * as Styles from './styles';

import { Text, Icon, Tag } from '../../../common';
import { graduation,business } from './constants';

const Experience: React.FC = () => {
  return (
    <Fragment>
      <Tag title='Experience' />
      <Styles.Container>
        <Styles.Card>
          {
            graduation.map(({ time, graduation, what }) => (
              <Styles.Timeline>
                <Styles.Header>
                  <Icon name='graduation' />
                  &nbsp;&nbsp;
                  <Text fontSize='xxsmall' color='dark_gray' fontWeight='medium'>{time}</Text>
                </Styles.Header>

                <Styles.Content>
                  <Styles.Line />
                  <Styles.Info>
                    <Text fontSize='xsmall' color='text' fontWeight='SemiBold'>{graduation}</Text>
                    <Text fontSize='xxsmall' color='text' fontWeight='medium'>{what}</Text>
                  </Styles.Info>
                </Styles.Content>
              </Styles.Timeline>
            ))
          }
        </Styles.Card>
        <Styles.Card>
          {
            business.map(({ time, business, what }) => (
              <Styles.Timeline>
                <Styles.Header>
                  <Icon name='business' />
                  &nbsp;&nbsp;
                  <Text fontSize='xxsmall' color='dark_gray' fontWeight='medium'>{time}</Text>
                </Styles.Header>

                <Styles.Content>
                  <Styles.Line />
                  <Styles.Info>
                    <Text fontSize='xsmall' color='text' fontWeight='SemiBold'>{business}</Text>
                    <Text fontSize='xxsmall' color='text' fontWeight='medium'>{what}</Text>
                  </Styles.Info>
                </Styles.Content>
              </Styles.Timeline>
            ))
          }
        </Styles.Card>
      </Styles.Container>
    </Fragment>
  );
};

export default Experience;
