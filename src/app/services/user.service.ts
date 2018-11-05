import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { User } from '../login/user';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    console.log("service");
    return this.http.get<User[]>('http://www.mocky.io/v2/5be009b53200005b006493b6');
  }

  test() {
    console.log("test");
  }
}
