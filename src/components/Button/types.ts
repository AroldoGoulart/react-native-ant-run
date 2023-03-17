import { TextProps, ViewStyle } from "react-native/types";

export type ButtonProps = {
    text: string | number;
    onPress: () => void;
    isLoading?: boolean;
    customStyle?: ViewStyle;
    variant: 'primary' | 'secondary';
    textProprieties?: TextProps;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    disabled?: boolean;
  }