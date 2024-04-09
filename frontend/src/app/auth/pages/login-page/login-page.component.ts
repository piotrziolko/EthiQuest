import { Component } from '@angular/core';
import { LoginPageFormBuild } from './login-page-form.build';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectToken,
} from '../../../../store/login/login.selectors';
import { login } from '../../../../store/login/login.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public formGroup: FormGroup;
  token = '';
  error = '';
  isLoading = false;

  constructor(
    private readonly authService: AuthService,
    private store: Store,
  ) {
    this.formGroup = LoginPageFormBuild.buildForm();
    this.store.select(selectToken).subscribe((token) => (this.token = token));
    this.store.select(selectError).subscribe((error) => (this.error = error));
    this.store
      .select(selectIsLoading)
      .subscribe((isLoading) => (this.isLoading = isLoading));
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
