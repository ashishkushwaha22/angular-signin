import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';

  @ViewChild('container') containerRef!: ElementRef<any>;

  constructor(private router: Router) {}


  register() {
    // Here you can perform the registration logic, such as sending a request to the server
    console.log('Registered username:', this.username);
    console.log('Registered password:', this.password);

    this.containerRef.nativeElement.classList.remove('sign-up-mode');

  }

  login() {
    console.log("Logged IN")
    this.router.navigateByUrl('/stepper');
  }

  onSignUpClick() {
    this.containerRef.nativeElement.classList.add('sign-up-mode');
  }

  onSignInClick() {
    this.containerRef.nativeElement.classList.remove('sign-up-mode');
  }
}
