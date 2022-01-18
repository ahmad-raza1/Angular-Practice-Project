import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ListComponent
  ]
})
export class UsersModule { }
