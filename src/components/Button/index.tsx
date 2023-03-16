/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@contexts/libs/theme';
import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

const Button = (props: {
  text: string | number;
  onPress: () => void;
  isLoading?: boolean;
  customStyle?: ViewStyle;
  variant?: 'primary' | 'secondary';
  textProprieties?: TextProps;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
}) => {
  const {
    text,
    onPress,
    isLoading,
    customStyle,
    textProprieties,
    startAdornment,
    endAdornment,
    disabled,
  } = props;

  const {colors} = useTheme();

  const bg = {
    ['primary']: colors.primary[500],
    ['secondary']: colors.secondary[600],
  };

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      style={{
        height: 50,
        backgroundColor: bg[props.variant || 'primary'],
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        ...customStyle,
      }}
      onPress={onPress}>
      {isLoading && (
        <ActivityIndicator size="small" color={colors.primary[500]} />
      )}
      {!isLoading && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {startAdornment && startAdornment}
          <Text style={{color: colors.text}} {...textProprieties}>
            {text}
          </Text>
          {endAdornment && endAdornment}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
