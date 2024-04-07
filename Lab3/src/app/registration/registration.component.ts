import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  name = "";
  age = "";

  // 1) create event
  @Output() myEvent = new EventEmitter<any>();
  // 2) data pass
  Students:{name:string,age:string}[]=[]
  // 3) Fire event

 send(){
  let nage = parseInt(this.age) 
  if(nage<=25 && nage>=10 && this.name.length>=3 ){
    let NewStudent = {name: this.name ,age: this.age};
    this.Students.push(NewStudent);
    this.myEvent.emit(this.Students)
  }
    
  }
}
