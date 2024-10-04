import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentSidebarComponent } from './component-sidebar/component-sidebar.component';
import { ComponentVideoListComponent } from './video/component-video-list/component-video-list.component';
import { ComponentVideoPlayerComponent } from './video/component-video-player/component-video-player.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ComponentHeaderComponent,
    ComponentSidebarComponent,
    ComponentVideoListComponent,
    ComponentVideoPlayerComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'my-first-app';
  selectedVideoId: string | null = null;

  onVideoSelect(videoId: string) {
    this.selectedVideoId = videoId;
  }

  get videoUrl() {
    return this.selectedVideoId ? `https://www.youtube.com/embed/${this.selectedVideoId}` : null;
  }

  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
