// components/wallet-modal.tsx

"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useConnectModal,
  useAccountModal,
} from '@rainbow-me/rainbowkit';
import React from 'react';

export const UnlockButton = ({
  ShowConnected = true,
  ShowNotConnected = true
} : {
    ShowConnected?: boolean 
    ShowNotConnected?: boolean
}) => {


  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  return <>{
    openConnectModal && !openAccountModal
    ?
    <> {ShowNotConnected ? <ConnectButton chainStatus="icon"/> : <></>}</>
    : 
    <> {ShowConnected ? <ConnectButton chainStatus="icon"/> : <></>} </> 
  } </>
  
};

export default UnlockButton



