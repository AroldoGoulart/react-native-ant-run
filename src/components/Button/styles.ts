  import { ThemeColorsType } from "@/contexts/libs/theme/types";
import { StyleSheet } from "react-native";

export const useStyle = (colors: ThemeColorsType) => 
    StyleSheet.create({
        container: {
            height: 50,
            borderRadius: 5,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          primary: {
            backgroundColor: colors.primary[500],
          },
          secondary: {
            backgroundColor: colors.secondary[500],
          },
          text: {
            color: colors.textAlt,
            fontSize: 16,
            fontWeight: 'bold',
          },
          loadingView:{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
    });
  
