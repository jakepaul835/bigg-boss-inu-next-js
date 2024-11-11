import { getPresaleJohanAddress, getEthPriceFeedAddress } from '../../utils/addressHelpers'
import BigNumber from 'bignumber.js'
import {abi as presaleABI} from '../../config/abi/presaleJohan' 
import {abi as ethPriceFeedABI} from '../../config/abi/ethPriceFeed' 
import { createContractCall, fetchContractData } from '../../utils/contractHelpers';

const fetchPresaleJohanData = async () => {

  const contractsToFetch = [
    createContractCall(getPresaleJohanAddress(), presaleABI, 'stageIterator', []),
    createContractCall(getPresaleJohanAddress(), presaleABI, 'totalTokensSold', []),
    createContractCall(getPresaleJohanAddress(), presaleABI, 'totalSoldInUSD', []),
    createContractCall(getPresaleJohanAddress(), presaleABI, 'paused', []),
    createContractCall(getEthPriceFeedAddress(), ethPriceFeedABI, 'latestRoundData', []),
  ];


  const [
    stageIterator,
    totelTokensSold,
    totalSoldInUSD,
    paused,
    [,priceFeed]

  ] = await fetchContractData<[number, string, string, boolean, [BigNumber,BigNumber,BigNumber,BigNumber,BigNumber]]>(contractsToFetch);

    // Helper to generate stages calls dynamically
    const generateStageIterators = (start: number, end: number) => {
      const calls = [];
      for (let i = start; i <= end; i++) {
        calls.push(createContractCall(getPresaleJohanAddress(), presaleABI, 'stages', [i]));
      }
      return calls;
    };
  
    console.log(priceFeed)

   // Dynamically generate calls for card earnings based on IDs
   const dynamicStagesCalls = [
    ...generateStageIterators(0, Number(stageIterator)),
  ];

  // Fetch all contract data for stages
  const _stages = await fetchContractData(dynamicStagesCalls);
  const stages = _stages.map((call, index) => {
    return {
      cost: _stages[index][0].toString(), // Extract the ID from the args array
      amount: _stages[index][1].toString(),
      max: (_stages[index][1]).toString(),
    };
  });

  let stageProgress = new BigNumber(0)
  if (stages.length > 0) {
    console.log(stages)
    console.log(stages[Number(stageIterator)])
    console.log(Number(stageIterator))
    const sold = new BigNumber(stages[stageIterator].max).minus(new BigNumber(stages[stageIterator].amount))
    stageProgress = sold.dividedBy(new BigNumber(stages[stageIterator].max))
  }
  else {
    console.log("NO !")
  }

  const usdPrecision = 100000000

  const ethPrice = new BigNumber(priceFeed).dividedBy(usdPrecision);
  const tokenPrice = new BigNumber(stages[Number(stageIterator)].cost).dividedBy(usdPrecision)
  const tokensPerDollar = Math.round(new BigNumber(1).dividedBy(tokenPrice).toNumber())
  const totalTokenSold = new BigNumber(totelTokensSold?.toString() ?? '0')
  const totalSoldinUSD = new BigNumber(totalSoldInUSD?.toString() ?? '0').dividedBy(usdPrecision)
  const tokensPerEth = Math.round(ethPrice.multipliedBy(tokensPerDollar).toNumber())

  return {
    stageIterator: new BigNumber(stageIterator?.toString() ?? '0').toJSON(),
    totalTokenSold: totalTokenSold.toNumber(),
    totalSoldInUSD: Math.round(totalSoldinUSD.toNumber()),
    paused,
    // stages: stages,
    stageCurrent: stages[Number(stageIterator)],
    stageProgress: new BigNumber(stageProgress?.toString() ?? '0').toNumber(),
    ethPrice: ethPrice.toNumber(),
    tokenPrice: tokenPrice.toNumber(),
    tokensPerDollar: tokensPerDollar,
    tokensPerEth: tokensPerEth
  }

}

export default fetchPresaleJohanData;

