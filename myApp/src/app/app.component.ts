import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose(
      [Validators.required, Validators.email]
    )),
    password: new FormControl('', Validators.compose(
      [Validators.required, Validators.minLength(8)]
    ))
  });

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  title = 'blog';
  formData!: any;

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  async loadAdmin(): Promise<void> {
    this.vcr.clear();
    const { ListComponent } = await import('./admin/list/list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(ListComponent)
    );
  }

  async loadUser(): Promise<void> {
    this.vcr.clear();
    const { ListComponent } = await import('./users/list/list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(ListComponent)
    );
  }

  onSubmit(data: any) {
    console.warn(data);
    this.formData = data;
  }

  reactiveFormSubmit() {
    console.warn(this.loginForm.value);
    this.formData = this.loginForm.value;
  }

  // data: any = [];

  // constructor(private user: UsersService) {
  //   this.user.getData().subscribe((data) => {
  //     console.warn(data);
  //     this.data = data;
  //   })
  // }

  // title = 'myApp';
  // myName = 'Ahmad Raza';
  // inputValue = '';
  // disabledProperty = true;
  // show = false;
  // color = 'green';
  // myList = ["Marley", "Jennifer", "Alan", "Holt"];
  // getUserValues(value: any) {
  //   console.log(value);
  // }
  // getName(name: any) {
  //   alert(name)
  // }
  // myEvent(value: any) {
  //   console.warn(value);
  // }
  // getValue(event: any) {
  //   this.inputValue = event.target.value;
  // }
  // toggleProperty() {
  //   this.disabledProperty = !this.disabledProperty;
  // }
}
