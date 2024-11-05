import { getPresaleJohanAddress } from '../../utils/addressHelpers'
import BigNumber from 'bignumber.js'
import {abi as presaleABI} from '../../config/abi/presaleJohan' 
import { createContractCall, fetchContractData } from '../../utils/contractHelpers';

const fetchPresaleJohanData = async () => {

  const contractsToFetch = [
    createContractCall(getPresaleJohanAddress(), presaleABI, 'stageIterator', []),
    createContractCall(getPresaleJohanAddress(), presaleABI, 'totalTokensSold', []),
    createContractCall(getPresaleJohanAddress(), presaleABI, 'totalSoldInUSD', []),
    createContractCall(getPresaleJohanAddress(), presaleABI, 'paused', []),
  ];

  const [
    stageIterator,
    totelTokensSold,
    totalSoldInUSD,
    paused

  ] = await fetchContractData<[number, string, string, boolean]>(contractsToFetch);

    // Helper to generate stages calls dynamically
    const generateStageIterators = (start: number, end: number) => {
      const calls = [];
      for (let i = start; i <= end; i++) {
        calls.push(createContractCall(getPresaleJohanAddress(), presaleABI, 'stages', [i]));
      }
      return calls;
    };
  
   // Dynamically generate calls for card earnings based on IDs
   const dynamicStagesCalls = [
    ...generateStageIterators(1, Number(stageIterator)),
  ];

  // Fetch all contract data for stages
  const _stages = await fetchContractData(dynamicStagesCalls);
  const stages = _stages.map((call, index) => {
    return {
      cost: _stages[index][0].toString(), // Extract the ID from the args array
      amount: _stages[index][1].toString(),
    };
  });


  return {
    stageIterator: new BigNumber(stageIterator?.toString() ?? '0').toJSON(),
    totelTokensSold: new BigNumber(totelTokensSold?.toString() ?? '0').toJSON(),
    totalSoldInUSD: new BigNumber(totalSoldInUSD?.toString() ?? '0').toJSON(),
    paused,
    stages: stages
  }

}

export default fetchPresaleJohanData;

