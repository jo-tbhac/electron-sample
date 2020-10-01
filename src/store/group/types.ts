export const FETCH_GROUPS = 'FETCH_GROUPS';

interface Group {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface GroupState {
  groups: Group[]
}

interface FetchGroupAction {
  type: typeof FETCH_GROUPS
  payload: Group[]
}

export type GroupActionTypes = FetchGroupAction;
