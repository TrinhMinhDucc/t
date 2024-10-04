import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentHeaderComponent } from './components/component-header/component-header.component';
import { ComponentSidebarComponent } from './components/component-sidebar/component-sidebar.component';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponentHeaderComponent,
    ComponentSidebarComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    provideAnimations()
  ]
})
export class AppComponent {
  title = 'ecomerce-site-duc';

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
