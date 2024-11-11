// store/createGenericSlice.ts

import { createSlice, PayloadAction, Draft, Dispatch } from '@reduxjs/toolkit';
import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRefresh from '../hooks/useRefresh';
import { store } from '.';
import { moduleRegistry } from './moduleRegistry';
// Define a generic state interface for contracts
export interface GenericContractState<T> {
  data: T;
}

// Type definitions for custom reducer and async thunk functions
type CustomReducer<T> = (state: Draft<GenericContractState<T>>, action: PayloadAction<T>) => void;
type CustomAsyncThunkFunction = (dispatch: Dispatch, sliceActions: any) => Promise<void>;
type CustomAsyncUserThunkFunction = (account: string) => (dispatch: Dispatch, sliceActions: any) => Promise<void>;

/**
 * Generate a a slice of reducers along with the corresponding actions. 
 * The function requires the initial state, and two asyncronous functions to load the data of type T (Promise<any>)
 * The generic function comes with default reducer operations and thunk function, which can be customized if needed. 
 */
interface GenericSliceParams<T> {
  name: string;
  initialState: T;
  fetchPublicData: () => Promise<any>;
  fetchUserData: (account: string) => Promise<any>;
  customReducers?: {
    setPublicData?: CustomReducer<T>;
    setUserData?: CustomReducer<T>;
  };
  customThunkFunctions?: {
    fetchPublicDataAsync?: CustomAsyncThunkFunction;
    fetchUserDataAsync?: CustomAsyncUserThunkFunction;
  };
}

// Create a generic slice factory with custom reducer and thunk support
export function createGenericSlice<T>({
  name,
  initialState,
  fetchPublicData,
  fetchUserData,
  customReducers = {},
  customThunkFunctions = {},
}: GenericSliceParams<T>) {
  const slice = createSlice({
    name,
    initialState: { data: initialState } as GenericContractState<T>,
    reducers: {
      setPublicData: customReducers.setPublicData || ((state, action: PayloadAction<T>) => {
        // Set state to action payload data of type T
        state.data = action.payload as Draft<T>;
      }),
      setUserData: customReducers.setUserData || ((state, action: PayloadAction<Partial<T>>) => {
        // Include user data in state
        state.data = { ...state.data, userData: action.payload } as Draft<T>;
      }),
    },
  });

  // Default async thunk function to fetch public data
  const defaultFetchPublicDataAsync = () => 
    async (dispatch: Dispatch) => {
      try {
        // read data from chain
        const data = await fetchPublicData();
        // call redcucer action
        dispatch(slice.actions.setPublicData(data));
      } catch (error) {
        console.error('Error fetching public data:', error);
      }
    };

  // Default async thunk function to fetch user data
  const defaultFetchUserDataAsync = (account: string) =>
    async (dispatch: Dispatch) => {
      try {
        // read data from chain
        const data = await fetchUserData(account);
        // call redcucer action
        dispatch(slice.actions.setUserData(data));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

  // Use custom async thunk functions if provided, otherwise use the default ones
  const fetchPublicDataAsync = customThunkFunctions.fetchPublicDataAsync
    ? () => async (dispatch: Dispatch) => customThunkFunctions.fetchPublicDataAsync!(dispatch, slice.actions)
    : defaultFetchPublicDataAsync;

    const fetchUserDataAsync = customThunkFunctions.fetchUserDataAsync
    ? (account: string) => (dispatch: Dispatch) => customThunkFunctions.fetchUserDataAsync!(account)(dispatch, slice.actions)
    : defaultFetchUserDataAsync;

  // retun reducer + public/userdata thunks
  return {
    reducer: slice.reducer,
    fetchPublicDataAsync,
    fetchUserDataAsync,
  };
}

// Create a ThunkDispatch
const useStateDispatch = () => useDispatch<typeof store.dispatch>();

// Modified hook to fetch public data for multiple contracts
export const useFetchPublicData = (account: string | undefined, ...contractNames: string[]) => {
  const dispatch = useStateDispatch();
  const { slowRefresh } = useRefresh();
  const memoizedContractNames = useMemo(() => contractNames, [JSON.stringify(contractNames)]);

// generate fetch public data function
  const fetchAllPublicData = useCallback(async () => {
    for (const contractName of contractNames) {
      try {
        const dynamicImport = moduleRegistry[contractName];
        if (dynamicImport) {
          const { fetchPublicDataAsync: dynamicFetchPublicDataAsync } = await dynamicImport();
          console.log("Public Update")
          dispatch(dynamicFetchPublicDataAsync());
        } else {
          console.error(`Contract ${contractName} not found.`);
        }
      } catch (error) {
        console.error(`Failed to fetch public data for ${contractName}:`, error);
      }
    }
  }, [memoizedContractNames,dispatch]);
  
  useEffect(() => {
    // fetch all data
    fetchAllPublicData();
  }, [slowRefresh,fetchAllPublicData,account]);
};

// Generic hook to fetch user-specific data for a given contract
export const useFetchUserData = <T>(account: string | undefined, contractName: keyof RootState): T | undefined => {
  const dispatch = useStateDispatch();
  const { fastRefresh } = useRefresh();

  const fetchUserData = useCallback(async () => {
    if (!account) return; // Skip if account is not provided
    try {
      const dynamicImport = moduleRegistry[contractName];
      if (dynamicImport) {
        const { fetchUserDataAsync: dynamicFetchUserDataAsync } = await dynamicImport();
        console.log("User Update");
        dispatch(dynamicFetchUserDataAsync(account));
      } else {
        console.error(`Contract ${contractName} not found.`);
      }
    } catch (error) {
      console.error(`Failed to fetch user data for ${contractName}:`, error);
    }
  }, [account, contractName, dispatch]);

  useEffect(() => {
    if (account && fetchUserData) {
      fetchUserData();
    }
  }, [account, fastRefresh, contractName, fetchUserData]);

  return useContractState<T, keyof RootState>(contractName);
};

  
 type RootState = ReturnType<typeof store.getState>;
 // Generic hook to get the contract state from the Redux store
 // Updated useContractState to infer the type from RootState based on contractName
export const useContractState = <T, K extends keyof RootState>(contractName: K): T | undefined => {
  return useSelector((state: RootState) => {
    const slice = state[contractName];
    // Check if the slice has a 'data' property
    return (slice as any)?.data !== undefined ? (slice as { data: T }).data : (slice as T);
  });
};