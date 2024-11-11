import BigNumber from 'bignumber.js'
// import { FarmConfig } from './config/constants/types'

export type TranslatableText =
  | string
  | {
      id: number
      fallback: string
      data?: {
        [key: string]: string | number
      }
    }

// Block

export interface Block {
  blockNumber: number
}


export interface PresaleJohan {
  stageIterator : number,
  totalTokenSold?: number,
  totalSoldInUSD?: number,
  paused: boolean,
  stageCurrent?: {
    cost: BigNumber,
    amount: BigNumber,
    max: BigNumber
  },
  stageProgress: number,
  ethPrice: number,
  tokenPrice: number,
  tokensPerDollar: number,
  tokensPerEth: number
  /* stages?: {
    cost: BigNumber,
    amount: BigNumber,
    max: BigNumber
  } */
  userData?: {
    balance: BigNumber
    usdcAllowance: BigNumber,
    usdtAllowance: BigNumber
  }
}

// Global state
export interface State {
  block: Block
  presale: PresaleJohan
}


