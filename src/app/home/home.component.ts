import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email = 'diyafabricationwork@gmail.com';
  slides = [
    {
      title: '@ Pollachi,Coimbatore',
      imageUrl: './images/Pollachi_1.jpg',
      altText: 'Slide 1'
    },
    {
      title: '@ Vadavalli ,Coimbatore',
      imageUrl: './images/Vadavalli_1.jpg',
      altText: 'Slide 2'
    },
    {
      title: '@ Kalapatti ,Coimbatore',
      imageUrl: './images/Kalapatti_2.jpg',
      altText: 'Slide 2'
    },
    {
      title: '@ Hopes ,Coimbatore',
      imageUrl: './images/Hopes_4.jpg',
      altText: 'Slide 2'
    },
    {
      title: '@ Cheran ma Nagar,Coimbatore',
      imageUrl: './images/Cheranma nagar_2.jpg',
      altText: 'Slide 2'
    },
    {
      title: '@Bodipalayam,Coimbatore',
      imageUrl: './images/Podipalayam_3.jpg',
      altText: 'Slide 2'
    },
    // You can add more slides here!
  ];

}
