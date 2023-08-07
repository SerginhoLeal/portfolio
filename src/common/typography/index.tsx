import styled, { css } from "styled-components";

import { ThemeProps } from '../../styles/theme';

const prefix = css`
  margin: 2px 0;
  padding: 0;

  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
`;

export const Text = styled.p<ThemeProps>`
  ${prefix};
  ${({ theme, color = 'default', fontSize = 'normal', fontWeight = 'normal', spacing = 'normal' }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.fontSize[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    letter-spacing: ${theme.spacing[spacing]};
  `}
`;

export const Title = styled.h1<ThemeProps>`
  ${prefix};
  ${({ theme, color = 'default', fontSize = 'normal', fontWeight = 'normal' }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.fontSize[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
  `}
`;