"use client";
 
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  Theme
} from '@rainbow-me/rainbowkit';
import { State, WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from 'react';
import { wagmiConfig } from "./config";
import { walletTheme } from "./theme";

const queryClient = new QueryClient();

export const WalletContextProvider =({
  children,
  initialState,
  customTheme  = walletTheme
}: {
  children: ReactNode,
  initialState?: State,
  customTheme?: Theme;
}) => {
  return (
    <WagmiProvider config={wagmiConfig}  initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={customTheme} showRecentTransactions={true}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};