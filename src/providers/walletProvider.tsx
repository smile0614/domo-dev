'use client';

import { WalletError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { endpoint, wallets } from '@/config/wallet';
import {
  AutoConnectProvider,
  useAutoConnect,
} from '@/providers/autoConnectProvider';

const ReactUIWalletModalProviderDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletModalProvider,
  { ssr: false }
);

export interface WalletContextState {
  error: WalletError | undefined;
  setError: Dispatch<SetStateAction<WalletError | undefined>>;
}

export const WalletContext = createContext<WalletContextState>(
  {} as WalletContextState
);

export function useWallet(): WalletContextState {
  return useContext(WalletContext);
}

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { autoConnect } = useAutoConnect();

  const [error, setError] = useState<WalletError>();

  const onError = useCallback((_error: WalletError) => {
    setError(_error);
  }, []);

  const value = useMemo(() => ({ error, setError }), [error]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        onError={onError}
        autoConnect={autoConnect}
      >
        <WalletContext.Provider value={value}>
          <ReactUIWalletModalProviderDynamic>
            {children}
          </ReactUIWalletModalProviderDynamic>
        </WalletContext.Provider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AutoConnectProvider>
      <WalletContextProvider>{children}</WalletContextProvider>
    </AutoConnectProvider>
  );
};
