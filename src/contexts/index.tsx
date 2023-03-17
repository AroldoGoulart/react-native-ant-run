import React from 'react';
import ReactQueryProvider from '@contexts/libs/react-query';
import { ThemeProvider } from '@contexts/libs/theme';

function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ReactQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
