import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-component-header',
  standalone: true,
  imports: [
    FormsModule,
    AutoCompleteModule,
    FloatLabelModule
  ],
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.scss'] // Sửa từ styleUrl thành styleUrls
})
export class ComponentHeaderComponent {
  searchQuery: string = '';
  filteredVideos: string[] = [];
  @Output() toggleSidebar = new EventEmitter<void>(); // Emit sự kiện toggle sidebar

  constructor(private youtubeService: YoutubeService) {}

  search(event: any) {
    if (this.searchQuery.trim()) {
      this.youtubeService.searchVideos(this.searchQuery).subscribe(
        (data: any) => {
          this.filteredVideos = data.items;
          console.log('Kết quả tìm kiếm:', this.filteredVideos);
        },
        (error) => {
          console.error('Lỗi khi tìm kiếm video:', error);
        }
      );
    } else {
      this.filteredVideos = [];
    }
  }

  onToggleSidebar() {
    this.toggleSidebar.emit(); // Phát sự kiện khi click vào nút
  }
}
