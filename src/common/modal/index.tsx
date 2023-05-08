import React from 'react';

import * as Styles from './styles';

import InfoData from './info.json';

// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

interface Props {
  isOpen: boolean;
  tech: 'mobile' | 'web' | 'design' | 'back';
  onCloseModal: () => void;
};

export const Modal: React.FC<Props> = ({ isOpen, tech, onCloseModal }: Props) => {
  const ref: any = React.useRef();
  const [haveTech, setHaveTech] = React.useState<any[]>([]);

  React.useEffect(() => {
    const handle = (event: any) => {
      if(!ref.current.contains(event.target)){
        onCloseModal();
      };
    };
    document.addEventListener("mousedown", handle)
    return () => document.removeEventListener("mousedown", handle)
  }, []);

  React.useEffect(() => {
    if(isOpen) setHaveTech(InfoData[tech]);
  }, [tech]);

  return !!isOpen ? (
    <Styles.Container>
      <Styles.Content ref={ref}>
        {haveTech.map((item) => (
          <Styles.Button href={item.url} target="_blank">
            <img
              alt=''
              src={item.preview}
              style={tech === 'web' ?
                { width: '100%', height: '80vh' }:
                { height: '82vh'}
              }
            />
          </Styles.Button>
        ))}
      </Styles.Content>
    </Styles.Container>
  ) : null;
}
