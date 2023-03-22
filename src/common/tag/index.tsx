import React from 'react';
import { Title } from '../typography';

import * as Styles from './styles';

interface Props {
  title: string;
}

export const Tag: React.FC<Props> = ({ title }:Props) => {
  return (
    <Styles.Container>
      <Styles.Content>
        <Title fontSize='xxlarge' fontWeight='bold'>{title}</Title>

        <Styles.FirstLine />
        <Styles.SecondLine />
      </Styles.Content>
    </Styles.Container>
  );
};
