export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';

export interface LoadingState {
  loading: boolean
}

interface LoadStartAction {
  type: typeof LOAD_START
}

interface LoadEndAction {
  type: typeof LOAD_END
}

export type LoadingActionTypes = LoadStartAction | LoadEndAction;
