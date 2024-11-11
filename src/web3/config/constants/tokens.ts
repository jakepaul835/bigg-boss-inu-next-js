import { Address } from "./types";

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  weth: {
    symbol: 'WETH',
    address: {
      1: `0x${'C02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'}`, // wrapped eth
      5: `0x${'8c46B7fdC6db2B4cCBe0f4C3B5326465143DDC20'}`,// TEST TOKEN // `0x${'b4fbf271143f4fbf7b91a5ded31805e42b2208d6', // wrapped eth
      56: `0x${''}`, // NONE
      97: `0x${''}`, // NONE
    } as Address,
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      1: `0x${''}`, // NONE
      5: `0x${''}`, // NONE
      56: `0x${'bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'}`, // bnb
      97: `0x${'ae13d989dac2f0debff460ac112a837c89baa7cd'}`, // bnb
    } as Address,
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      1: `0x${'dAC17F958D2ee523a2206206994597C13D831ec7'}`,
      5: `0x${''}`,
      97: `0x${'E02dF9e3e622DeBdD69fb838bB799E3F168902c5'}`,
      56: `0x${'55d398326f99059ff775485246999027b3197955'}`,
    } as Address,
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      1: `0x${'2260fac5e5542a773aa44fbcfedf7c193bc2c599'}`,
      5: `0x${''}`,
      56: `0x${'7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'}`,
      97: `0x${'E02dF9e3e622DeBdD69fb838bB799E3F168902c5'}`,
    } as Address,
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      1: `0x${''}`,
      5: `0x${'1f9840a85d5af5bf1d1762f925bdaddc4201f984'}`,
      56: `0x${'bf5140a22578168fd562dccf235e5d43a02ce9b1'}`,
      97: `0x${'E02dF9e3e622DeBdD69fb838bB799E3F168902c5'}`,
    } as Address,
    decimals: 18,
    projectLink: 'https://uniswap.org/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      1: `0x${'4Fabb145d64652a948d72533023f6E7A623C7C53'}`,
      5: `0x${''}`,
      56: `0x${'e9e7cea3dedca5984780bafc599bd69add087d56'}`,
      97: `0x${'ed24fc36d5ee211ea25a80239fb8c4cfd80f12ee'}`, // Secondary: 0x8301f2213c0eed49a7e28ae4c3e91722919b8b47',
    } as Address,
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      1: `0x${'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'}`,
      5: `0x${''}`,
      56: `0x${''}`,
      97: `0x${'ed24fc36dee211ea25a80239fb8c4cfd80f12ee'}`, // Secondary: 0x8301f2213c0eed49a7e28ae4c3e91722919b8b47',
    } as Address,
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  }
}

export default tokens
