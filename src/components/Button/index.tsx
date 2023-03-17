/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '../../contexts/libs/theme';
import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStyle } from './styles';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const {
    text,
    onPress,
    isLoading,
    customStyle,
    textProprieties,
    startAdornment,
    endAdornment,
    disabled,
    variant = `primary`
  } = props;

  const {colors} = useTheme();
  const styles = useStyle(colors);

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      style={[
        styles.container,
        styles[variant],
        { opacity: isLoading || disabled ? 0.95 : 1 },
        customStyle,
      ]}
      onPress={onPress}>
      {isLoading && (
        <ActivityIndicator size="large" color={colors.textAlt} />
      )}
      {!isLoading && (
        <View style={styles.loadingView}>
          {startAdornment && startAdornment}
          <Text style={[styles.text, textProprieties]}>
            {text}
          </Text>
          {endAdornment && endAdornment}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
