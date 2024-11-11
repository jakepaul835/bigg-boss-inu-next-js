import addresses from '../config/constants/contracts'
import tokens from '../config/constants/tokens'
import { Address } from '../config/constants/types'
import { useChainId } from 'wagmi'

export const getAddress = (address: Address, chainId : number = 1): `0x${string}` => {
  const mainNetChainId = 1
  return address[chainId as keyof Address] ?? address[mainNetChainId];
}
export const getMulticallAddress = () => {
  return getAddress(addresses.mulltiCall)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
export const getPresaleJohanAddress = () => {
  return getAddress(addresses.presaleJohan)
}
export const getEthPriceFeedAddress = () => {
  return getAddress(addresses.ethPriceFeed)
}