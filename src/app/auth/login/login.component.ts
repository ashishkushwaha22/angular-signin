import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string= '';
  password: string = '';

  login() {
    // Here you can perform the login logic, such as sending a request to the server
    console.log('Login username:', this.username);
    console.log('Login password:', this.password);
  }
}
