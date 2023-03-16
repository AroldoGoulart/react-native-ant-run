import {lightColors} from '@contexts/libs/theme/constants';

export type ThemeColorsType = typeof lightColors;

export type Theme = {
  colors: ThemeColorsType;
  isDark: boolean;
};
