import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataType } from './users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }

  getInterfacedData() {
    const data: dataType = {
      id: 1,
      name: 'Ahmad',
      pakistani: true,
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  }
}
