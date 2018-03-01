import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs/rx';

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
    username: ''
  };
  formGroup: FormGroup;
  
  constructor() { 
    this.formGroup = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3), this.noPepe]),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'username': new FormControl('', Validators.required, this.userExists)
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

  noPepe(formControl: FormControl)  {
    if (formControl.value == 'pepe') {
      return { noPepe: true };
    }
    return null;
  }

  userExists(formControl: FormControl): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value == 'pepe') {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }

}
