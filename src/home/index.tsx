import React from 'react';

import * as Styles from './styles';

import About from './screens/about';
import Presentation from './screens/presentation';
import HardSkills from './screens/skills';
import Experience from './screens/experience';

const Home: React.FC = () => {
  const [github, setGithub] = React.useState([] as any);

  React.useEffect(() => {
    (() => {
      fetch('http://192.168.15.187:3333/repos', { method: 'GET' })
        .then(jsn => jsn.json())
        .then(setGithub)
        .catch(console.log)
    })();
    // (() => {
    //   fetch('https://api.github.com/users/SerginhoLeal/repos', { method: 'GET' })
    //     .then(jsn => jsn.json())
    //     .then(setGithub)
    //     .catch(console.log)
    // })();
  }, []);

  return (
    <Styles.Container>

      <Presentation />

      <About github={github} />

      <HardSkills />

      <Experience />

    </Styles.Container>
  );
};

export default Home;