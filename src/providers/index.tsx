import React from 'react';

import { ContextProvider } from '@/providers/walletProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ContextProvider>{children}</ContextProvider>;
};
