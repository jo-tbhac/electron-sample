export const FETCH_MESSAGES = 'FETCH_MESSAGES';

interface Message {
  id: number
  userId: number
  groupId: number
  body: string
  createdAt: string
  updatedAt: string
}

export interface MessageState {
  messages: Message[]
}

interface FetchMessagesAction {
  type: typeof FETCH_MESSAGES
  payload: Message[]
}

export type MessageActionTypes = FetchMessagesAction;
