import { _color, _fontSize, _fontWeight } from './constants';

export interface TextProps {
  color?: keyof typeof _color;
  fontSize?: keyof typeof _fontSize;
  fontWeight?: keyof typeof _fontWeight;
};
