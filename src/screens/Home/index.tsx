import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { useAnts } from '@services/ants';
import { useTheme } from '@contexts/libs/theme';
import Button from '@components/Button';
import LoadingAnts from '@screens/Home/libs/LoadingAnts';

import {
  AntRaceStatus,
  AntWithStatus,
  RaceStatus,
  Steps,
  StringKeyedObject,
} from '@screens/Home/types';

import SingleAnt from '@screens/Home/libs/SingleAnt';
import { useStyle } from './styles';
import { RaceStatusText } from './constants';

function Home() {
  const { colors } = useTheme();
  const styles = useStyle(colors);

  const [canGetAnts, setCanGetAnts] = useState<boolean>(false);
  const [step, setStep] = useState<Steps>(Steps.INITIAL);
  const [antGeneralData, setAntGeneralData] =
    useState<StringKeyedObject<AntWithStatus>>();
  const [startedRace, setStartedRace] = useState<boolean>(false);

  useAnts({
    enabled: canGetAnts,
    onSuccess: ({ ants }) => {
      setStep(Steps.COMPLETED);

      const antsWithStatus = ants.reduce((acc, ant) => {
        acc[ant.name] = {
          ...ant,
          status: AntRaceStatus.NOT_YET_RUN,
          timeToFinish: 0,
        };
        return acc;
      }, {} as StringKeyedObject<AntWithStatus>);

      setAntGeneralData(antsWithStatus);
    },
  });

  const [raceStatus, setRaceStatus] = useState<RaceStatus>(
    RaceStatus.NOT_YET_RUN,
  );

  useEffect(() => {
    if (startedRace && !!antGeneralData) {
      // change all ants to running
      const newAnts = Object.keys(antGeneralData).reduce((acc, antName) => {
        acc[antName] = {
          ...antGeneralData[antName],
          status: AntRaceStatus.IN_PROGRESS,
        };
        return acc;
      }, {} as StringKeyedObject<AntWithStatus>);
      setAntGeneralData(newAnts);
      setRaceStatus(RaceStatus.RUNNING);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedRace]);

  const onAntEndRance = useCallback(
    (timeEnded: number, antName: string) => {
      let antsNow = antGeneralData;
      if (!antsNow) {
        return;
      }
      antsNow[antName].status = AntRaceStatus.CALCULATED;
      antsNow[antName].timeToFinish = timeEnded;

      // check if all ants are finished
      const allAntsFinished = Object.values(antsNow).every(
        ant => ant.status === AntRaceStatus.CALCULATED,
      );
      if (allAntsFinished) {
        setRaceStatus(RaceStatus.STOPPED);
      }
      setAntGeneralData(antsNow);
    },
    [antGeneralData],
  );

  return (
    <View style={styles.container}>
      {step === Steps.INITIAL && (
        <LoadingAnts onPress={() => setCanGetAnts(true)} />
      )}
      {step === Steps.COMPLETED && !!antGeneralData && (
        <View style={styles.flatView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Object.values(antGeneralData)}
            keyExtractor={item => item.name + item.status}
            renderItem={({ item }) => (
              <SingleAnt ant={item} onEnd={onAntEndRance} />
            )}
          />

          <View>
            <Text style={styles.statusText}>{RaceStatusText[raceStatus]}</Text>
            <Button
              text={
                raceStatus === RaceStatus.NOT_YET_RUN ? 'Run!' : 'Finished!'
              }
              variant={'primary'}
              disabled={raceStatus !== RaceStatus.NOT_YET_RUN}
              isLoading={raceStatus === RaceStatus.RUNNING}
              onPress={() => setStartedRace(true)}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default Home;
