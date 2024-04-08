import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loginSuccess, loginFailure } from './login.actions';
import { AuthService } from '../../app/auth/services/auth.service';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Login] User Login'),
      switchMap(({ username, password }) =>
        this.authService.signIn({ username, password }).pipe(
          map((token) => loginSuccess({ token: token.access_token })),
          catchError((error) => of(loginFailure({ error }))),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
