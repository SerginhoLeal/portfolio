import React from 'react';

import * as Styles from './styles';

import Logo from '../../assets/svg/logo.svg';

type StepsProps = 'hello' | 'about' | 'skill' | 'experience';

export const Header: React.FC = () => {
  const [steps, setSteps] = React.useState<StepsProps>("hello");

  return (
    <Styles.Container>
      <img src={Logo} />
      <Styles.Navigation step={steps}>
        <a href='#' onClick={() => setSteps("hello")}>Hello</a>
        <a href='#' onClick={() => setSteps("about")}>About me</a>
        <a href='#' onClick={() => setSteps("skill")}>Skills</a>
        <a href='#' onClick={() => setSteps("experience")}>Experience</a>
        <span />
      </Styles.Navigation>
    </Styles.Container>
  );
};
