import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // n = "";
  // a = "";
  // e = "" ;

  Registeration = new FormGroup({
    name: new FormControl("", [Validators.minLength(3), Validators.required]),
    age: new FormControl(0, [Validators.min(20), Validators.max(40), Validators.required]),
    email: new FormControl("", [Validators.email,Validators.required]),
  })


  getdata() {
    console.log(this.Registeration.controls.name.valid);
    console.log(this.Registeration.controls.age.valid);
    console.log(this.Registeration.controls.email.valid);
    let name = this.Registeration.controls.name.value;
    let age = this.Registeration.controls.age.value;
    let email = this.Registeration.controls.email.value;
    
    console.log(`Name: ${name} , Age: ${age} , Email: ${email}`);
    // this.n = name;
    
  }


  get nameValid() {
    return this.Registeration.controls.name.valid;
  }
  get ageValid() {
    return this.Registeration.controls.age.valid;
  }

  get emailValid() {
    return this.Registeration.controls.email.valid;
  }
}
