export const OPEN_GROUP_FORM = 'OPEN_GROUP_FORM';
export const CLOSE_GROUP_FORM = 'CLOSE_GROUP_FORM';
export const FETCH_GROUPS = 'FETCH_GROUPS';

interface Group {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface GroupState {
  groups: Group[]
  formVisible: boolean
}

interface OpenGroupFormAction {
  type: typeof OPEN_GROUP_FORM
}

interface CloseGroupFormAction {
  type: typeof CLOSE_GROUP_FORM
}

interface FetchGroupAction {
  type: typeof FETCH_GROUPS
  payload: Group[]
}

export type GroupActionTypes = OpenGroupFormAction
  | CloseGroupFormAction
  | FetchGroupAction;
