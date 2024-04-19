import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectToken } from '../../../store/login/login.selectors';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  selectToken$ = this.store.select(selectToken);

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | null> {
    return this.selectToken$.pipe(
      tap((isLogged) => {
        if (!isLogged) {
          this.router.navigate(['/auth/login'], {
            queryParams: { returnUrl: state.url },
          });
          return false;
        }

        return true;
      }),
    );
  }
}
