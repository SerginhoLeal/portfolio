import React from 'react';

import * as Styles from './styles';

import Me from "../../../assets/img/presentation_Image.png";

import { Title, Text, Icon } from '../../../common';

const Presentation: React.FC = () => {
  return (
    <Styles.Main>

      <Styles.Content>
        <Styles.Title>
          <Title fontSize='extraLarge' fontWeight='bold'>Software Engineer &</Title>
          <Title style={{ marginTop: -15 }} fontSize='extraLarge' fontWeight='bold'>Designer</Title>
        </Styles.Title>

        <Text style={{ maxWidth: 450 }} fontSize='small' fontWeight='medium' color='text'>
          Software Engineer Web & Mobile and Designer with figma.
        </Text>

        <Styles.Contacts>
          <Icon name='whatsapp' onPress={() => window.open('https://wa.me/5531975564133', '_blank')} />
          <Icon name='linkedin' onPress={() => window.open('https://www.linkedin.com/in/sergio-574783162', '_blank')} />
          <Icon name='github' onPress={() => window.open('https://github.com/SerginhoLeal', '_blank')} />
        </Styles.Contacts>

        <Styles.Hexagon>
          <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9154 30.9834C28.418 29.5472 29.5472 28.4179 30.9834 27.9154L108.345 0.845376C109.781 0.34281 111.368 0.52162 112.657 1.33117L182.055 44.937C183.343 45.7466 184.193 47.0988 184.363 48.6108L193.54 130.057C193.71 131.569 193.183 133.076 192.107 134.152L134.152 192.107C133.076 193.183 131.569 193.71 130.057 193.54L48.6109 184.363C47.0988 184.193 45.7466 183.343 44.9371 182.055L1.3312 112.657C0.521643 111.368 0.342842 109.781 0.845401 108.345L27.9154 30.9834Z" fill="#FF424D" fill-opacity="0.3"/>
          </svg>
        </Styles.Hexagon>

        <Styles.Dodecaedro>
          <svg width="184" height="190" viewBox="0 0 184 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65.1567 1.4067C65.6412 0.688381 66.5332 0.363739 67.3661 0.602566L177.576 32.2046C178.408 32.4435 178.993 33.1914 179.023 34.0573L183.024 148.638C183.055 149.504 182.524 150.291 181.71 150.588L73.973 189.8C73.1588 190.097 72.2464 189.835 71.7129 189.152L1.1268 98.8063C0.593359 98.1235 0.560233 97.1749 1.04475 96.4566L65.1567 1.4067Z" fill="#FF424D" fill-opacity="0.3"/>
          </svg>
        </Styles.Dodecaedro>

        <Styles.Nonagon>
          <svg width="196" height="196" viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9416 30.36C28.4384 29.2946 29.2946 28.4383 30.36 27.9415L89.0564 0.570955C90.1218 0.0741666 91.3282 -0.0313813 92.4636 0.272866L155.021 17.0351C156.157 17.3394 157.149 18.0339 157.823 18.9969L194.97 72.0487C195.644 73.0116 195.958 74.1813 195.855 75.3524L190.211 139.87C190.108 141.041 189.597 142.139 188.765 142.97L142.97 188.765C142.139 189.596 141.041 190.108 139.87 190.211L75.3524 195.855C74.1813 195.958 73.0116 195.644 72.0487 194.97L18.9969 157.823C18.034 157.149 17.3394 156.157 17.0351 155.021L0.272895 92.4636C-0.0313504 91.3281 0.074192 90.1218 0.570987 89.0564L27.9416 30.36Z" fill="#FF424D" fill-opacity="0.3"/>
          </svg>
        </Styles.Nonagon>

      </Styles.Content>

      <Styles.Image>
        <img src={Me} />
      </Styles.Image>

    </Styles.Main>
  );
};

export default Presentation;