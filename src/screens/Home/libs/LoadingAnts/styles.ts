import { StyleSheet } from 'react-native';
import { ThemeColorsType } from '@contexts/libs/theme/types';

export const useStyle = (colors: ThemeColorsType) =>
  StyleSheet.create({
    lottie: {
      width: 140,
      height: 140,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
  });
