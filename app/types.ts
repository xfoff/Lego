import { SvgProps } from 'react-native-svg';

export type SvgP = SvgProps & {
  svgWidth: number
  svgHeight: number
  color: string
}

export type CollectionT = {
  id: number
  image: string
  name: string
}

export type Theme = {
  name: string,
  primary: string;
  secondary: string;
  tetriary: string;
  text: string;
  icons: string;
  pink: string;
}
