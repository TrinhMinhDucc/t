import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyB39D1iWRE0-5DAn6aBsKeWZzyTcTrxnq8';  // Thay bằng API Key của bạn
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?part=snippet&q=${query}&type=video&key=${this.apiKey}`;
    return this.http.get(url);
  }


  getVideoDetails(videoId: string): Observable<any> {
    const url = `${this.apiUrl}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  
  getListVideos(playlistId: string): Observable<any> {
    const url = `${this.apiUrl}/playlistItems?part=snippet&playlistId=${playlistId}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  searchVideos(query: string): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: this.apiKey,
        maxResults: '10', // Giới hạn số lượng video trả về
      },
    });
  }
}
