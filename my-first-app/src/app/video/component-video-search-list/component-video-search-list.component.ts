import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-component-video-search-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component-video-search-list.component.html',
  styleUrls: ['./component-video-search-list.component.scss']
})
export class ComponentVideoSearchListComponent {
  @Output() searchEvent = new EventEmitter<string>();
  
  searchQuery: string = '';
  filteredVideos: any[] = [];
  allVideos: any[] = [];
  search(event: any) {
    this.filteredVideos = this.allVideos.filter(video =>
      video.snippet.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.searchEvent.emit(this.searchQuery);
  }
}
