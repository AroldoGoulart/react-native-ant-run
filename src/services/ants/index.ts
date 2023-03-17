import { useQuery, UseQueryOptions } from 'react-query';
import { API } from '../api';
import { createAnts } from './keys';
import { AntsResponse } from './types';

export const useAnts = (options?: UseQueryOptions<AntsResponse>) => {
  return useQuery<AntsResponse>(
    createAnts(),
    () =>
      API<AntsResponse>('/ants', {
        method: 'GET',
      }),
    {
      ...options,
    },
  );
};
