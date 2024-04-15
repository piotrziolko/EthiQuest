import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginPageFormBuild {
  private static formBuilder: FormBuilder = new FormBuilder();

  public static buildForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
