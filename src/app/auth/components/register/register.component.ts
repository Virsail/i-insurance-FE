import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { NgForm} from '@angular/forms'
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {
  
  register;
  
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
    this.register = {
      username: '',
      email: '',
      password : '',

    };
  }
  registerUser (register: NgForm) {
    this.registerService.registerNewUser(this.register).subscribe(
      response => {
        alert('user' + this.register.username + 'has been created')
      },
      error => alert('user' + this.register.username + 'has not  been created')
    );


  }

}
