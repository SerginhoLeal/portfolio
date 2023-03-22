import React from 'react';

import * as Styles from './styles';

import Reacts from "../../assets/img/react.png";
import English from "../../assets/img/english.png";

type Props = {
  name: string
};

export const Images: React.FC<Props> = ({ name }: Props) => {
  switch (name) {
    case 'react': return <Styles.ImageCard src={Reacts} alt='' />;
    case 'english': return <Styles.ImageCard src={English} alt='' />;

    default: return <Styles.ImageCard src={Reacts} alt='' />;
  };
};