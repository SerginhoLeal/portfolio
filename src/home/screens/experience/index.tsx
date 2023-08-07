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
                  <Text fontSize='thin' color='dark_gray' fontWeight='normal'>{time}</Text>
                </Styles.Header>

                <Styles.Content>
                  <Styles.Line />
                  <Styles.Info>
                    <Text fontSize='extra_light' color='thirty' fontWeight='semi_bold'>{graduation}</Text>
                    <Text fontSize='extra_light' color='dark_gray' fontWeight='normal'>{what}</Text>
                  </Styles.Info>
                </Styles.Content>
              </Styles.Timeline>
            ))
          }
        </Styles.Card>
        <Styles.Card>
          {
            business.map(({ time, business, what, outsourced }) => (
              <Styles.Timeline>
                <Styles.Header>
                  <Icon name='business' />
                  &nbsp;&nbsp;
                  <Text fontSize='thin' color='dark_gray' fontWeight='normal'>{time}</Text>
                </Styles.Header>

                <Styles.Content>

                  <Styles.Line />

                  <Styles.Info>
                    <Text fontSize='extra_light' color='thirty' fontWeight='semi_bold'>{business}</Text>
                    <Text fontSize='extra_light' color='dark_gray' fontWeight='normal'>{what}</Text>
                    {outsourced?.map((out) => (
                      <Styles.Outsourced>
                        <Styles.Info>
                          <Text fontSize='thin' color='dark_gray' fontWeight='normal'>{out.time}</Text>
                          <Text fontSize='extra_light' color='thirty' fontWeight='semi_bold'>{out.business}</Text>
                          <Text fontSize='extra_light' color='dark_gray' fontWeight='normal'>{out.what}</Text>
                        </Styles.Info>
                      </Styles.Outsourced>
                    ))}
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
