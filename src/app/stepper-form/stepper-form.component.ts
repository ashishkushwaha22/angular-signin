import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css']
})
export class StepperFormComponent {

  country = ['API DATA'];


  academicDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.academicDetailsForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }

  submit() {
    this.router.navigateByUrl('/register');
  }

}