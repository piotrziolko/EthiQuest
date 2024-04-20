import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { MyAccountModule } from './my-account/my-account.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, MyAccountModule],
})
export class FeaturesModule {}
