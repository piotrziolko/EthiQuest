import { createSelector } from '@ngrx/store';

const selectLogin = (state: any) => state.login;

export const selectToken = createSelector(selectLogin, (state) => state.token);

export const selectError = createSelector(selectLogin, (state) => state.error);

export const selectIsLoading = createSelector(
  selectLogin,
  (state) => state.isLoading,
);
