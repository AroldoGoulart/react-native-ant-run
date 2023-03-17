import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { AntRaceStatus } from '@screens/Home/types';

import { generateAntWinLikelihoodCalculator } from '@utils/helpers';
import { useTheme } from '@contexts/libs/theme';
import { textStatus } from '@screens/Home/libs/SingleAnt/constants';
import { useStyle } from '@screens/Home/libs/SingleAnt/stytes';
import { SingleAntProps } from '@screens/Home/libs/SingleAnt/types';

function SingleAnt(props: SingleAntProps) {
  const { colors } = useTheme();
  const { ant, onEnd } = props;
  const styles = useStyle(colors);
  const [localRunStatus, setLocalRunStatus] = useState<AntRaceStatus>(
    ant.status,
  );

  useEffect(() => {
    if (ant.status === AntRaceStatus.IN_PROGRESS && ant.timeToFinish === 0) {
      setLocalRunStatus(AntRaceStatus.IN_PROGRESS);
      const antWinLikelihoodCalculator = generateAntWinLikelihoodCalculator();
      antWinLikelihoodCalculator(time => {
        onEnd(time, ant.name);
        setLocalRunStatus(AntRaceStatus.CALCULATED);
      });
    }
  }, [ant, onEnd]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{ant.name}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Length: {ant.length}</Text>
          <Text style={styles.infoText}>Weight: {ant.weight}</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text>{textStatus[localRunStatus]}</Text>
          <Text>{ant.timeToFinish}</Text>
        </View>
      </View>
    </View>
  );
}

export default SingleAnt;
