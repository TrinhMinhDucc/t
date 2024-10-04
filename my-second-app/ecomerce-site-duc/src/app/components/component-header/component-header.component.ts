import { Component, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar'
import { InputTextModule } from 'primeng/inputtext'
import { AutoCompleteModule } from 'primeng/autocomplete'


@Component({
  selector: 'app-component-header',
  standalone: true,
  imports: [
    ToolbarModule,
    InputTextModule,
    AutoCompleteModule
  ],
  templateUrl: './component-header.component.html',
  styleUrl: './component-header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentHeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  searchTerm: string = '';

  constructor() { }

  search() {
    console.log('Tìm kiếm:', this.searchTerm);
  }

}