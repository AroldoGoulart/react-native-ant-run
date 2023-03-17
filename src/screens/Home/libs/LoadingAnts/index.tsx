import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { useTheme } from '@contexts/libs/theme';

import AnimationAnt from '../../../../../assets/animations/ants/red-ant-walking.json';

import { LoadingAntsProps } from './types';
import { useStyle } from './styles';

function LoadingAnts(props: LoadingAntsProps) {
  const { colors } = useTheme();
  const { onPress } = props;
  const styles = useStyle(colors);

  return (
    <View style={styles.container}>
      <Lottie style={styles.lottie} source={AnimationAnt} autoPlay loop />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>Press to get ants</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoadingAnts;
