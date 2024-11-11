'use client';

export const walletconnectProjectId = process.env.NEXT_PUBLIC_PROJECT_ID;
import {
  metaMaskWallet,
  walletConnectWallet,
  coinbaseWallet,
  injectedWallet,
  safeWallet,
  braveWallet,
  krakenWallet,
  ledgerWallet,
  phantomWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
if (!walletconnectProjectId) throw new Error("Project ID is not defined");
import { http, createConfig  } from "wagmi";
import { mainnet } from "wagmi/chains";
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
export const rpc = process.env.NEXT_PUBLIC_RPC_URL;



const connectors = connectorsForWallets(
  [
    {
      groupName: 'Suggested',
      wallets: [
        metaMaskWallet,
        coinbaseWallet,
        trustWallet,
        walletConnectWallet,
        safeWallet,
        injectedWallet,
        braveWallet,
        krakenWallet,
        phantomWallet,
        ledgerWallet 
      ],
    },
  ],
  { appName: 'scikrypt.com web3 solutions', projectId: walletconnectProjectId },
);

export const wagmiConfig = createConfig({
    connectors,
    chains: [mainnet],
    ssr: true,
    transports: {
      [mainnet.id]: http(rpc, {
        batch: true
      }),
    }
  })

  