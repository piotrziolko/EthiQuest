import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>('login');

export const selectToken = createSelector(
  selectLoginState,
  (state: LoginState) => state.token,
);

export const selectError = createSelector(
  selectLoginState,
  (state: LoginState) => state.error,
);

export const selectIsLoading = createSelector(
  selectLoginState,
  (state: LoginState) => state.isLoading,
);
