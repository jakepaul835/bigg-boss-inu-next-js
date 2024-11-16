import BigNumber from 'bignumber.js'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 12
export const TOKEN_PER_BLOCK = new BigNumber(0.140625)
export const BLOCKS_PER_YEAR = new BigNumber(60 * 60 * 24 * 365) // 31536000
export const BASE_URL = 'https://bigbossinu'
export const BASE_EXCHANGE_URL = 'https://app.uniswap.org/'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add/v2`
export const BASE_BUY_TOKEN_URL = `${BASE_EXCHANGE_URL}/#/swap?outputCurrency=`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export * from './constants'