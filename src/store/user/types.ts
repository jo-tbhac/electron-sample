export const SIGN_IN = 'SIGN_IN';

export interface UserState {
  name: string
  email: string
  isSignIn: boolean
}

export interface SignInParams {
  email: string
  password : string
}

export interface SignUpParams {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

interface SignInAction {
  type: typeof SIGN_IN
  payload: { name: string, email: string }
}

export type UserActionTypes = SignInAction;
