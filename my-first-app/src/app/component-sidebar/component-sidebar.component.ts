import { Component } from '@angular/core';

@Component({
  selector: 'app-component-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './component-sidebar.component.html',
  styleUrl: './component-sidebar.component.scss'
})
export class ComponentSidebarComponent {
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
}
