import { getPresaleJohanAddress, getAddress } from '../../utils/addressHelpers'
import BigNumber from 'bignumber.js'
import {abi as presaleABI} from '../../config/abi/presaleJohan' 
import {abi as erc20ABI} from '../../config/abi/erc20' 
import { createContractCall, fetchContractData } from '../../utils/contractHelpers'
import  tokens  from '../../config/constants/tokens'
// import { getFullDisplayBalance } from '@/web3/utils/formatBalance'
// import multicall from 'utils/multicall'



const fetchPresaleJohanUserData = async (account : string) => {
  const calls = [
    createContractCall(getPresaleJohanAddress(), presaleABI, 'balances', [account]),
    createContractCall(getAddress(tokens.usdc.address), erc20ABI, 'allowance', [account,getPresaleJohanAddress()]),
    createContractCall(getAddress(tokens.usdt.address), erc20ABI, 'allowance', [account,getPresaleJohanAddress()]),
  ];

  const [balance, usdcAllowance, usdtAllowance] 
  = await fetchContractData<[number, BigNumber,BigNumber]>(calls);

  // console.log(getFullDisplayBalance(new BigNumber(usdcAllowance), 6))
  // console.log(getFullDisplayBalance(new BigNumber(usdtAllowance), 6))

  return {
    balance: new BigNumber(balance).toJSON(),
    usdcAllowance: new BigNumber(usdcAllowance).toJSON(),
    usdtAllowance: new BigNumber(usdtAllowance).toJSON()
  };
};


export default fetchPresaleJohanUserData