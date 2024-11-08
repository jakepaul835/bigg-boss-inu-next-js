import { useCallback, useEffect, useState } from 'react'
import { useAccount, UseWriteContractParameters } from 'wagmi'
import { Abi, parseEther } from "viem";
import { getPresaleJohanAddress } from "../utils/addressHelpers";
import {abi as presaleABI} from '../config/abi/presaleJohan'
import { writeContract } from '@wagmi/core';
import { wagmiConfig } from '../components/Wallet';
import { createContractCall, fetchContractData, useContractWrite } from '../utils/contractHelpers';



export const useClaimTokens = () => {
  const handle= useCallback(
    async () => {
      /** const txHash : `0x${string}` = await useContractWrite({
        abi : promoABI,
        address: getPromoServiceAddress(),
        functionName: "claim",
        args: []
      })
      return txHash; */
    }, []);
  return { onClaimWMC: handle }
}


export const useDepositCoin = () => {
  const handle= useCallback(
    async (value = "0") => {
      const txHash : `0x${string}` = await useContractWrite({
        abi : presaleABI,
        address: getPresaleJohanAddress(),
        functionName: "depositCoin",
        args: ["0x0000000000000000000000000000000000000000"],
        value: parseEther(value), 
      })
      return txHash;
    }, [], );

  return { onDepositCoin: handle }
}; 