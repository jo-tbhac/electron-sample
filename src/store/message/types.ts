import { User } from '../user/types';

export const SELECT_GROUP = 'SELECT_GROUP';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export interface Message {
  id: number
  body: string
  createdAt: string
  user: User
}

export interface MessageState {
  messages: Message[]
  targetGroupId: number
}

interface SelectGroupAction {
  type: typeof SELECT_GROUP
  payload: number
}

interface FetchMessagesAction {
  type: typeof FETCH_MESSAGES
  payload: Message[]
}

export type MessageActionTypes = SelectGroupAction | FetchMessagesAction;
