/** 
 * INFO: Contract modules need to be registered here 
 * in order to ensure proper bundling during build process
 * and to ensure that all reducers are exported in index.ts
 */ 
export const moduleRegistry: Record<string, () => Promise<any>> = {
    block: () => import('./block'),
    presaleJohan: () => import('./presaleJohan'),
  };