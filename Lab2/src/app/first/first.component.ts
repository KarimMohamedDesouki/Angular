import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  fname = ""

  reset() {
    this.fname = "";
  }
}
