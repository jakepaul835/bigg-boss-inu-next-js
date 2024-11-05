import { getPresaleJohanAddress } from '../../utils/addressHelpers'
import BigNumber from 'bignumber.js'
import {abi as presaleABI} from '../../config/abi/presaleJohan' 
import { createContractCall, fetchContractData } from '../../utils/contractHelpers'
// import multicall from 'utils/multicall'



const fetchPresaleJohanUserData = async (account : string) => {
  // retrieve booster data to get compute balance

  // Retrive base data: code of user, current card indices, if user has claim, and the claimable card ID
  const calls = [
    createContractCall(getPresaleJohanAddress(), presaleABI, 'balances', [account]),
  ];

  const [balance] 
  = await fetchContractData<[number]>(calls);

  return {
    balance: new BigNumber(balance).toJSON(),
  };
};


export default fetchPresaleJohanUserData