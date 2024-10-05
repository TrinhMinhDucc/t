import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-component-card',
  standalone: true,
  imports: [
    DataViewModule 
  ],
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.scss']
})
export class ComponentCardComponent {

}
