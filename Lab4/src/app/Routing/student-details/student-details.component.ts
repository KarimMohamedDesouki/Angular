import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  id=0;
  constructor(myRoute: ActivatedRoute){
    console.log(myRoute.snapshot.params["id"]);
    this.id = myRoute.snapshot.params["id"];
  }
}
