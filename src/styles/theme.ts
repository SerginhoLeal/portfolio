export const colors = {
  default: '#FFFFFF',

  primary: '#FF674D',
  secondary: '#395FF5',
  thirty: '#888888',

  text: '#47474D',

  success: '#47C747',

  white: '#fff',
  black: '#000',

  charleston_green: '#292D32',
  dark_gray: '#AAAAAA',
};

export const fontStyle = {
  normal: 'normal',
  italic: 'italic',
};

export const fontSize = {
  ultra_thin: '6px',
  extra_thin: '8px',
  thin: '10px',
  extra_light: '12px',
  light: '14px',
  normal: '16px',
  medium: '18px',
  semi_bold: '20px',
  bold: '22px',
  extra_bold: '24px',
  black: '34px'
};

export const fontWeight = {
  thin: 100,
  extra_light: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semi_bold: 600,
  bold: 700,
  extra_bold: 800,
  black: 900
};

const spacing = {
  normal: '1px',
  medium: '2px',
  semi_bold: '3px',
  bold: '4px',
  extra_bold: '5px',
  black: '6px'
};

export default {
  colors,
  spacing,
  fontSize,
  fontStyle,
  fontWeight,
};

export interface ThemeProps {
  color?: keyof typeof colors;
  spacing?: keyof typeof spacing;
  fontSize?: keyof typeof fontSize;
  fontStyle?: keyof typeof fontStyle;
  fontWeight?: keyof typeof fontWeight;
}