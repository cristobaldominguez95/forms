import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: []
})
export class ReactiveComponent {

  formGroup = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'lastName': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  constructor() { }

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
