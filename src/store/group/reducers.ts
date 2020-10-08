import {
  OPEN_GROUP_FORM,
  CLOSE_GROUP_FORM,
  FETCH_GROUPS,
  SEARCH_MEMBER,
  SEARCH_START,
  SEARCH_END,
  APPEND_MEMBER,
  REMOVE_MEMBER,
  CREATE_GROUP,
  GroupActionTypes,
  GroupState,
} from './types';

const initialState: GroupState = {
  groups: [],
  formVisible: false,
  groupMemberPool: [],
  members: [],
  searchingMember: false,
};

const groupReducer = (state = initialState, action: GroupActionTypes) => {
  switch (action.type) {
    case OPEN_GROUP_FORM:
      return {
        ...state,
        formVisible: true,
      };
    case CLOSE_GROUP_FORM:
      return {
        ...state,
        formVisible: false,
      };
    case FETCH_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case SEARCH_MEMBER:
      return {
        ...state,
        members: action.payload,
        searchingMember: false,
      };
    case SEARCH_START:
      return {
        ...state,
        searchingMember: true,
      };
    case SEARCH_END:
      return {
        ...state,
        searchingMember: false,
      };
    case APPEND_MEMBER: {
      if (state.groupMemberPool.find((member) => member.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        groupMemberPool: [action.payload, ...state.groupMemberPool],
      };
    }
    case REMOVE_MEMBER:
      return {
        ...state,
        groupMemberPool: state.groupMemberPool.filter((member) => member.id !== action.payload),
      };
    case CREATE_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
        formVisible: false,
      };
    default:
      return state;
  }
};

export default groupReducer;
