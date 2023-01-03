import React from 'react';

import * as Styles from './styles';

import Me from "../assets/me.png";

import { Title, Text, Header } from '../common';

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Header />
      <Styles.ImageMe src={Me} alt='' />
      <Title fontSize='xxlarge'>Sérgio Leal</Title>
      <Text fontSize='small' fontWeight='medium'>Software Engineer & Designer</Text>
      <Text fontSize='xsmall' fontWeight='light'>Portfolio in progress...</Text>
    </Styles.Container>
  );
};

export default Home;