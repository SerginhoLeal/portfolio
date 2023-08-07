import React, { SVGProps } from 'react';

import { Text } from '../../typography';

import * as Styles from './styles';
import { Export } from '../../../assets/svg';

interface Props {
  link: string;
  url: string;
  icon: React.FC<SVGProps<SVGSVGElement>>
};

export const Tools: React.FC<Props> = ({
  link,
  url,
  icon: Icon
}: Props) => {
  return (
    <Styles.Container>
      <Icon width={18} height={18} fill='white'/>
      <span />
      <a href={url} target='_blank'>
        <Text fontSize='thin'>{link}</Text>
        &nbsp;
        <Export width={10} height={10} stroke='white'/>
      </a>
    </Styles.Container>
  )
};