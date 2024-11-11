// store/membership.ts

import { createGenericSlice } from '../factory';
import fetchMembershipData from './fetchPresaleJohan';
import fetchMembershipUserData from './fetchPresaleJohanUserData';
import { PresaleJohan } from '../types';

// Define initial state for presale johan
const initialState: PresaleJohan = { stageIterator: 0, paused: false, ethPrice: 0, stageProgress: 0, tokenPrice: 0, tokenPriceNext: 0, tokensPerDollar: 0, tokensPerEth: 0 }

// Create the membership reducers for public and user data
// Export thunks and reducer
export const { reducer, fetchPublicDataAsync, fetchUserDataAsync } =  createGenericSlice({
      name: 'presaleJohan',
      initialState,
      fetchPublicData: fetchMembershipData,
      fetchUserData: fetchMembershipUserData
    });