import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrationComponent,StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  DatafromLogin: { name: string, age: string }[] = [];
  getfromLogin(students: { name: string, age: string }[]) {
    this.DatafromLogin = students;


 
  }
}
