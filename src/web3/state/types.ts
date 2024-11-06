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
  totelTokensSold?: BigNumber,
  totalSoldInUSD?: BigNumber,
  paused: boolean,
  stages?: {
    cost: BigNumber,
    amount: BigNumber,
    max: BigNumber
  }
  userData?: {
    balance: BigNumber
  }
}


// Global state
export interface State {
  block: Block
  presale: PresaleJohan
}
