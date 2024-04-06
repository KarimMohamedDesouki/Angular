import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  index = 0;
  interval: any;
  images: string[] = [
    "/assets/Images/image1.webp",
    "/assets/Images/image2.webp",
    "/assets/Images/image3.webp",
    "/assets/Images/image4.webp",
    "/assets/Images/image5.webp"
  ];
  // StartSlider
  startSlide() {
    this.interval = setInterval(() => {
      this.nextImage();
      
    }, 1000);
  }
  // Stop Slider
  stopSlide() {
    clearInterval(this.interval);
  }
  // Next button
  nextImage() {
    if (this.index >= this.images.length - 1) {
      this.stopSlide();
      return;
    }
    this.index++;
  }
  // Previous button
  prevImage() {
    if (this.index <= 0) {
      return;
    }
    this.index--;
  }
  ngOnInit(): void { }
}
