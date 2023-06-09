import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = {
    phoneNumber: '',
    password: '',
  };

  loginUser() {
    // Send the user data to the server or perform any necessary actions
    console.log(this.user);
  }

}
