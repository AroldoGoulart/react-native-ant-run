import { Ant } from '@services/ants/types';

export type StringKeyedObject<T> = {
  [key: string]: T;
};

export enum AntRaceStatus {
  NOT_YET_RUN = 0,
  IN_PROGRESS = 1,
  CALCULATED = 2,
}

export type AntWithStatus = Ant & {
  status: AntRaceStatus;
  timeToFinish: number;
};

export enum Steps {
  INITIAL = 0,
  COMPLETED = 1,
}
export enum RaceStatus {
  NOT_YET_RUN = 0,
  RUNNING = 1,
  STOPPED = 2,
}
