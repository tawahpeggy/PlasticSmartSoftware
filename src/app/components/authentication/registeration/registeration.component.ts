import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  registerUser() {
    // Check if the passwords match
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Send the user data to the server or perform any necessary actions
    console.log(this.user);
  }

}
