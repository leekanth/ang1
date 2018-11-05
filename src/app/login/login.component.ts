import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:User[]=[];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUsers() {
    console.log('getUsers');

    this.userService.test();
    this.userService.getUsers().subscribe(
      (res: User[]) => {
        console.log(res);
        this.users.push(res.users[0]);
        this.users.push(res.users[1]);
        console.log(this.users);
      },
      (err) => {console.log(err)},
      () => {
        console.log('getUsers completed');
      }

    );
  }

}
