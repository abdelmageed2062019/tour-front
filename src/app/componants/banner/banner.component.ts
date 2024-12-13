import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../componants/header/header.component';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{
  activeSlide: number = 0;

  slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  setActiveSlide(index: number): void {
    this.activeSlide = index;
  }

  getCountryName(index: number): string {
    const countries = [
      'Cairo', 'Alex', 'Siwa', 'Luxor', 'Aswan',
      'Fayoum', 'Hurghada', 'Sharm', 'Oasis'
    ];
    return countries[index] || 'Country';
  }

  getPrice(index: number): string {
    const prices = ['70', '90', '500', '495', '700', '200', '390', '390', '450'];
    return prices[index] || 'Price';
  }
}

