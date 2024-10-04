import { Component, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-component-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    NgIf,
    RouterModule,
    NgFor,
    ButtonModule
  ],
  animations: [
    trigger('panelState', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      transition('closed => open', [
        animate('0.3s ease-in')
      ]),
      transition('open => closed', [
        animate('0.3s ease-out')
      ])
    ])
  ],
  templateUrl: './component-sidebar.component.html',
  styleUrls: ['./component-sidebar.component.scss'],
})
export class ComponentSidebarComponent {
  @Input() isOpen = false;

  

  menuItems = [
    { label: 'Home', link: '/home' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];
}
