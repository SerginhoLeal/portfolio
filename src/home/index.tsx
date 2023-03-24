import React from 'react';

import About from './screens/about';
import Presentation from './screens/presentation';
import HardSkills from './screens/skills';
import Experience from './screens/experience';

import { Header } from '../common';


const Home: React.FC = () => {
  const [github, setGithub] = React.useState([] as any);

  React.useEffect(() => {
    (() => {
      fetch('https://api.github.com/users/SerginhoLeal/repos', { method: 'GET' })
        .then(jsn => jsn.json())
        .then(setGithub)
        .catch(console.log)
    })();
  }, []);

  return (
    <React.Fragment>

      {/* <Header /> */}

      <Presentation />

      <About github={github} />

      <HardSkills />

      <Experience />

    </React.Fragment>
  );
};

export default Home;