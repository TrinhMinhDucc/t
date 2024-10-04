// video.model.ts
export interface VideoSnippet {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  }
  
  export interface Video {
    id: {
      videoId: string;
    };
    snippet: VideoSnippet;
  }
  