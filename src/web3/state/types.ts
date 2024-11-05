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

export interface Membership {
  earnings?: {
    id: number,
    address: string,
    value: BigNumber,
  }
  timeOpen?: BigNumber,
  timeClose?: BigNumber,
  standardId: number,
  blackId: number,
  goldId: number,
  bitId: number,
  isSalesManAround: boolean
  userData?: {
    affiliateCode: string
    tokenId: number
    isOwner: boolean
    bonus: number
    earningsAll: BigNumber
    earningsHighest: BigNumber
    claimable: boolean
    cardIdToClaim: number
    cardsData: {
      id: number,
      address: string,
      code: string,
      affilliate: number
    },
    isMember: boolean,
    wmcBalance: number
  }
}

export interface PresaleJohan {
  stageIterator : number,
  totelTokensSold?: BigNumber,
  totalSoldInUSD?: BigNumber,
  paused: boolean,
  stages?: {
    cost: BigNumber,
    amount: BigNumber
  }
  userData?: {
    balance: BigNumber
  }
}


// Global state
export interface State {
  block: Block
  membership: Membership
}
