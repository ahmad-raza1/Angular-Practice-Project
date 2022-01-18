import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private user:UsersService) {
    this.user.getData().subscribe((data) => {
      console.warn(data);
    })
  }

  title = 'myApp';
  myName = 'Ahmad Raza';
  inputValue = '';
  disabledProperty = true;
  show = false;
  color = 'green';
  myList = ["Marley", "Jennifer", "Alan", "Holt"];
  getUserValues(value: any) {
    console.log(value);
  }
  getName(name: any) {
    alert(name)
  }
  myEvent(value: any) {
    console.warn(value);
  }
  getValue(event: any) {
    this.inputValue = event.target.value;
  }
  toggleProperty() {
    this.disabledProperty = !this.disabledProperty;
  }
}
