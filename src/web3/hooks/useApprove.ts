import { useCallback, } from 'react'
import {abi as erc20ABI} from '../config/abi/erc20'
import { handleContractWrite } from '../utils/contractHelpers';
import BigNumber from 'bignumber.js';

export const useApprove = () => {
    const handle= useCallback(
      async (erc: `0x${string}`, spender : string, value: string, decimals = 18) => {
        const txHash : `0x${string}` = await handleContractWrite({
          abi : erc20ABI,
          address: erc,
          functionName: "approve",
          args: [spender,new BigNumber(value).times(new BigNumber(10).pow(decimals)).toString()],
          value: 0n, 
        })
        return txHash;
      }, [], );
  
    return { onApprove: handle }
  }; 