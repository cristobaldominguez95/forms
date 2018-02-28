import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: []
})
export class ReactiveComponent {

  user = {
    name: 'Cristóbal',
    lastName: 'Domínguez',
    email: 'cristobaldominguez95@gmail.com',
    hobbies: ['running', 'coding', 'reading']
  };
  formGroup: FormGroup;
  
  constructor() { 
    this.formGroup = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email])
    });
    this.formGroup.setValue(this.user);
  }

  save(): void {
    console.log(this.formGroup.value);
  }

  isInvalid(property: string, validator: string): boolean {
    if (validator == undefined) {
      return this.formGroup.controls[property].invalid && (this.formGroup.controls[property].dirty || this.formGroup.controls[property].touched);
    }
    return this.formGroup.controls[property].errors[validator];
  }

}
