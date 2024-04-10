import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './login.actions';

export interface LoginState {
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: LoginState = {
  token: null,
  error: null,
  isLoading: false,
};

export const loginReducer = createReducer<LoginState>(
  initialState,
  on(login, (state): LoginState => ({ ...state, isLoading: true })),
  on(
    loginSuccess,
    (state, { token }): LoginState => ({
      ...state,
      token,
      isLoading: false,
      error: null,
    }),
  ),
  on(
    loginFailure,
    (state, { error }): LoginState => ({
      ...state,
      error,
      isLoading: false,
    }),
  ),
);
