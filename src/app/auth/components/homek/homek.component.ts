import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../services';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-homek',
  templateUrl: './homek.component.html',
  styleUrls: ['./homek.component.css']
})
export class HomekComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[] = [];
  ngOnInit(): void {
  }

} // this.userService.getAll().pipe(first()).subscribe(users => {
  //     this.users = users;
  // });










