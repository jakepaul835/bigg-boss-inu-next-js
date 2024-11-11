import { useCallback, } from 'react'
import { parseEther } from "viem";
import { getPresaleJohanAddress } from "../utils/addressHelpers";
import {abi as erc20ABI} from '../config/abi/erc20'
import { useContractWrite } from '../utils/contractHelpers';
import { ethers } from 'ethers';

export const useApprove = () => {
    const handle= useCallback(
      async (erc: `0x${string}`, spender : string) => {
        const txHash : `0x${string}` = await useContractWrite({
          abi : erc20ABI,
          address: erc,
          functionName: "approve",
          args: [spender,ethers.MaxInt256],
          value: 0n, 
        })
        return txHash;
      }, [], );
  
    return { onApprove: handle }
  }; 