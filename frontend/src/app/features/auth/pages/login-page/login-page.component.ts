import { Component } from '@angular/core';
import { LoginPageFormBuild } from './login-page-form.build';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectToken,
} from '../../../../../store/login/login.selectors';
import { login } from '../../../../../store/login/login.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public formGroup: FormGroup;
  selectToken$ = this.store.select(selectToken);
  selectError$ = this.store.select(selectError);
  selectIsLoading$ = this.store.select(selectIsLoading);

  token: string | null = '';
  error: string | null = '';
  isLoading = false;

  constructor(private store: Store) {
    this.formGroup = LoginPageFormBuild.buildForm();
    this.selectToken$.subscribe((token) => (this.token = token));
    this.selectError$.subscribe((error) => (this.error = error));
    this.selectIsLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading),
    );
  }

  public submit(): void {
    if (this.formGroup.valid)
      this.store.dispatch(
        login({
          username: this.formGroup.value.username,
          password: this.formGroup.value.password,
        }),
      );
  }
}
