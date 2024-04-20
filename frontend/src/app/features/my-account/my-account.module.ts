import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';

@NgModule({
  declarations: [MyAccountPageComponent],
  imports: [CommonModule, SharedModule, MyAccountRoutingModule],
  exports: [MyAccountRoutingModule],
})
export class MyAccountModule {}
