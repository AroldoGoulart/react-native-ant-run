import { StyleSheet } from 'react-native';
import { ThemeColorsType } from '@contexts/libs/theme/types';

export const useStyle = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 12,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 10,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoText: {
      fontWeight: 'bold',
    },
    statusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
