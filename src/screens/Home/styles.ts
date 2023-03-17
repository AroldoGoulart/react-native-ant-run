import { StyleSheet } from 'react-native';
import { ThemeColorsType } from '@contexts/libs/theme/types';

export const useStyle = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    flatView: {
      flex: 1,
      marginVertical: 20,
      marginHorizontal: 20,
      justifyContent: 'center',
    },
    statusText: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
  });
