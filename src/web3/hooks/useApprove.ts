import { useCallback, } from 'react'
import {abi as erc20ABI} from '../config/abi/erc20'
import { handleContractWrite } from '../utils/contractHelpers';
import { ethers } from 'ethers';

export const useApprove = () => {
    const handle= useCallback(
      async (erc: `0x${string}`, spender : string) => {
        const txHash : `0x${string}` = await handleContractWrite({
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