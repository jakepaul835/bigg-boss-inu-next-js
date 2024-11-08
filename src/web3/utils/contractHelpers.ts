import { readContracts, writeContract } from "@wagmi/core";
import { wagmiConfig } from '../components/Wallet' 
import { Abi } from "viem";
import { UseWriteContractParameters } from "wagmi";
import { useCallback } from "react";

type ContractCall = {
    address: `0x${string}`; // Address must be a hex string starting with 0x
    abi: Abi; // ABI must conform to the Abi type
    functionName: string;
    args?: any[]; // Arguments can be optional, and should be an array if provided
  };

export const createContractCall = (address: `0x${string}`, abi: Abi, functionName: string, args: any[] = []): ContractCall => ({
    address,
    abi,
    functionName,
    args,
  });

  // Function to dynamically fetch contract data with proper typing
// Modify fetchContractData to accept a tuple of return types
export const fetchContractData = async <T extends any[]>(contractsData: ContractCall[]): Promise<T> => {
  try {
    const results = await readContracts(wagmiConfig, {
      contracts: contractsData,
    });

    // Map through the results and return them as the expected tuple of types
    const processedResults = results.map((result, index) => {
      if (result.status === 'success') {
        return result.result as T[number]; // Return the result as the corresponding type in the tuple
      } else if (result.status === 'failure') {
        throw result.error;
      }
    });

    return processedResults as T; // Return the array as the tuple type
  } catch (error) {
    console.error('Error fetching contract data:', error);
    throw error;
  }
};

interface UseContractWriteParams {
  address: `0x${string}`;
  abi: Abi;
  functionName: string;
  args?: any[];
  value?: bigint; // Optional value for payable functions
}

export const useContractWrite = async ({
  address,
  abi,
  functionName,
  args = [],
  value,
}: UseContractWriteParams): Promise<`0x${string}`> => {
  try {
    const txHash: `0x${string}` = await writeContract(wagmiConfig, {
      abi,
      address,
      functionName,
      args,
      value,
    });
    return txHash;
  } catch {
  console.log("ABBORTED")
  return "0x0"
}
}