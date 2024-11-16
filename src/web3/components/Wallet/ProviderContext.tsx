"use client";
 
import '@rainbow-me/rainbowkit/styles.css';
import {
  AvatarComponent,
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
const ensImage = true;

const CustomAvatar: AvatarComponent = () => {
  return ensImage ? (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      alt='profile'
      src={'profile.png'}
      style={{ borderRadius: 999 }}
    />
  ) : (
    <div
      style={{
        backgroundColor: "#161616",
        borderRadius: 999,
        height: "20px",
        width: "20px",
      }}
    >
      :^)
    </div>
  );
};

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
        <RainbowKitProvider avatar={CustomAvatar} theme={customTheme} showRecentTransactions={true}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};