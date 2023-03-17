import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { ReactQueryProviderProps } from '@contexts/libs/react-query/types';

const queryClient = new QueryClient();

const ReactQueryProvider = ({
  children,
  dehydratedState,
}: ReactQueryProviderProps) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={dehydratedState}>{children}</Hydrate>
  </QueryClientProvider>
);

export default ReactQueryProvider;
