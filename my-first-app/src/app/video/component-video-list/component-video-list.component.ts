import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { YoutubeService } from '../../youtube.service';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { Video } from '../video.model';

@Component({
  selector: 'app-component-video-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ListboxModule],
  templateUrl: './component-video-list.component.html',
  styleUrls: ['./component-video-list.component.scss']
})
export class ComponentVideoListComponent implements OnInit {
  videos: any[] = [];
  query: string = 'trending';
  selectedVideo: string | null = null;
  @Output() videoSelected = new EventEmitter<string>();

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.youtubeService.getVideos(this.query).subscribe((data: any) => {
      this.videos = data.items.map((item: Video) => ({
        id: item.id.videoId,
        snippet: {
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          thumbnails: item.snippet.thumbnails,
        }
      }));
    });
  }

  viewVideo(videoId: string) {
    console.log('Selected Video ID:', videoId);
    this.videoSelected.emit(videoId);
  }
}
