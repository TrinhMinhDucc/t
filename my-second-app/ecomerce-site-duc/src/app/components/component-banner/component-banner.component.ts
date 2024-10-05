import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-component-banner',
  standalone: true,
  templateUrl: './component-banner.component.html',
  imports: [
    CarouselModule
  ],
  styleUrls: ['./component-banner.component.scss']
})
export class ComponentBannerComponent {
  banners: any[] = [];

  constructor() {
    this.banners = [
      { image: 'assets/images/banner1.jpg', alt: 'Banner 1' },
      { image: 'assets/images/banner2.jpg', alt: 'Banner 2' },
      { image: 'assets/images/banner3.jpg', alt: 'Banner 3' },
      { image: 'assets/images/banner4.jpg', alt: 'Banner 4' }
    ];
  }
}
