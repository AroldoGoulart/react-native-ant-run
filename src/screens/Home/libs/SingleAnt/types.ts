import { AntWithStatus } from '@screens/Home/types';

export type SingleAntProps = {
  ant: AntWithStatus;
  onEnd: (value: number, antName: string) => void;
};
