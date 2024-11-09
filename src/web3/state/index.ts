import { configureStore } from '@reduxjs/toolkit';
import { moduleRegistry } from './moduleRegistry';

// Function to dynamically load reducers
const loadReducer = async (key: string) => {
  try {
    const module = await import(`./${key}`);
    return module.reducer;
  } catch (error) {
    console.error(`Failed to load reducer for ${key}:`, error);
    return undefined;
  }
};

// Async function to initialize the store
const initializeStore = async () => {
  const reducerEntries = await Promise.all(
    Object.keys(moduleRegistry).map(async (key) => {
      const reducer = await loadReducer(key);
      return [key, reducer];
    })
  );

  const reducers = reducerEntries.reduce((acc, [key, reducer]) => {
    if (reducer) {
      acc[key] = reducer;
    }
    return acc;
  }, {} as Record<string, any>);

  return configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: reducers,
  });
};

// Initialize and export the store
export const store = await initializeStore();

// Re-export hooks and dynamic imports
export { useFetchPublicData, useFetchUserData } from './factory';
