import { Component } from '@angular/core';
import { LoginPageFormBuild } from './login-page-form.build';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public formGroup: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.formGroup = LoginPageFormBuild.buildForm();
  }

  public submit(): void {
    if (this.formGroup.valid)
      this.authService
        .signIn(this.formGroup.value)
        .subscribe((response) => console.log(response));
  }
}
