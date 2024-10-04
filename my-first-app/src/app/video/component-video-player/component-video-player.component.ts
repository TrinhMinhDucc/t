import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-video-player',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './component-video-player.component.html',
  styleUrl: './component-video-player.component.scss'
})
export class ComponentVideoPlayerComponent {
  @Input() videoUrl: string | null = null;
}
