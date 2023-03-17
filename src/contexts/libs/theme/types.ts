import { lightColors } from '@contexts/libs/theme/constants';
import { ColorSchemeName } from 'react-native/types';

export type ThemeColorsType = typeof lightColors;

export type Theme = {
  colors: ThemeColorsType;
  isDark: boolean;
};

export type ThemeContextType = {
  colors: ThemeColorsType;
  defaultSchema: ColorSchemeName;
  changeTheme: () => void;
};
