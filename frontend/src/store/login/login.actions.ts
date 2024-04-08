import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] User Login',
  props<{ username: string; password: string }>(),
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: string }>(),
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string }>(),
);
