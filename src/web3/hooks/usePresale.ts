import { useCallback, } from 'react'
import { parseEther } from "viem";
import { getPresaleJohanAddress } from "../utils/addressHelpers";
import {abi as presaleABI} from '../config/abi/presaleJohan'
import { handleContractWrite } from '../utils/contractHelpers';
import BigNumber from 'bignumber.js';



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
      const txHash : `0x${string}` = await handleContractWrite({
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

export const useDepositUSDC = () => {
  const handle= useCallback(
    async (value = "0") => {
      const txHash : `0x${string}` = await handleContractWrite({
        abi : presaleABI,
        address: getPresaleJohanAddress(),
        functionName: "depositUSDC",
        args: [new BigNumber(value).times(new BigNumber(10).pow(6)).toString(), "0x0000000000000000000000000000000000000000"],
      })
      return txHash;
    }, [], );

  return { onDepositUSDC: handle }
}; 

export const useDepositUSDT = () => {
  const handle= useCallback(
    async (value = "0") => {
      const txHash : `0x${string}` = await handleContractWrite({
        abi : presaleABI,
        address: getPresaleJohanAddress(),
        functionName: "depositUSDT",
        args: [new BigNumber(value).times(new BigNumber(10).pow(6)).toString(), "0x0000000000000000000000000000000000000000"],
      })
      return txHash;
    }, [], );

  return { onDepositUSDT: handle }
}; 