import styled, { css } from "styled-components";

import { TextProps } from './types';
import { _color, _fontSize, _fontWeight } from './constants';

const prefix = css`
  margin: 2px 0;
  padding: 0;

  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
`;

export const Text = styled.p<TextProps>`
  ${prefix};
  ${({ color = 'primary', fontSize = 'medium', fontWeight = 'bold' }: TextProps) => css`
    color: ${_color[color]};
    font-size: ${_fontSize[fontSize]};
    font-weight: ${_fontWeight[fontWeight]};;
  `}
`;

export const Title = styled.h1<TextProps>`
  ${prefix};
  ${({ color = 'primary', fontSize = 'xxxlarge' }: TextProps) => css`
    color: ${_color[color]};
    font-size: ${_fontSize[fontSize]};
  `}
`;