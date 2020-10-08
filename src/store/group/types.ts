export const OPEN_GROUP_FORM = 'OPEN_GROUP_FORM';
export const CLOSE_GROUP_FORM = 'CLOSE_GROUP_FORM';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const SEARCH_MEMBER = 'SEARCH_MEMBER';
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_END = 'SEARCH_END';
export const APPEND_MEMBER = 'APPEND_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const CREATE_GROUP = 'CREATE_GROUP';

interface Group {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface Member {
  id: number
  name: string
}

export interface GroupState {
  groups: Group[]
  formVisible: boolean
  groupMemberPool: Member[]
  members: Member[]
  searchingMember: boolean
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

interface SearchMemberAction {
  type: typeof SEARCH_MEMBER
  payload: Member[]
}

interface SearchStartAction {
  type: typeof SEARCH_START,
}

interface SearchEndAction {
  type: typeof SEARCH_END,
}

interface AppendMemberAction {
  type: typeof APPEND_MEMBER
  payload: Member
}

interface RemoveMemberAction {
  type: typeof REMOVE_MEMBER
  payload: number
}

interface CreateGroupAction {
  type: typeof CREATE_GROUP
  payload: Group
}

export type GroupActionTypes = OpenGroupFormAction
  | CloseGroupFormAction
  | FetchGroupAction
  | SearchMemberAction
  | SearchStartAction
  | SearchEndAction
  | AppendMemberAction
  | RemoveMemberAction
  | CreateGroupAction;
