import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  user: Object = {
    name: null,
    lastName: null,
    country: '',
    gender: null,
    accept: false
  };
  countries: string[] = ['Spain', 'Portugal', 'France', 'Germany', 'United Kingdom', 'Italy'];
  genders: string[] = ['Male', 'Female'];

  constructor() { }

  save(templateForm: NgForm): void {
    console.log('form submitted');
    console.log(this.user);
  }

}
