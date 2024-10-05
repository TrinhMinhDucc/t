import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentHeaderComponent } from './components/component-header/component-header.component';
import { ComponentSidebarComponent } from './components/component-sidebar/component-sidebar.component';
import { ComponentBannerComponent } from './components/component-banner/component-banner.component';
import { ComponentProductsListComponent } from './components/component-products-list/component-products-list.component';
import { ComponentCardComponent } from './components/component-card/component-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponentHeaderComponent,
    ComponentSidebarComponent,
    ComponentBannerComponent,
    ComponentProductsListComponent,
    ComponentCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecomerce-site-duc';

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
