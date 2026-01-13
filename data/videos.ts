// Video data for the Hero carousel - Shikhara Films YouTube Channel

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  description?: string;
}

// YouTube video URLs from @shikharafilms channel
const YOUTUBE_VIDEOS = [
  "https://www.youtube.com/watch?v=zFLey-8Z3bM",
  "https://www.youtube.com/watch?v=4jmPi5bXGO8",
  "https://www.youtube.com/watch?v=H8VyuWX-Fug",
  "https://www.youtube.com/watch?v=i7TR4yunrhg",
  "https://www.youtube.com/watch?v=KR029gqJQAQ",
];

export const heroVideos: Video[] = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "https://img.youtube.com/vi/zFLey-8Z3bM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/zFLey-8Z3bM",
    category: "Commercial",
    description: "Shikhara Films Production"
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "https://img.youtube.com/vi/4jmPi5bXGO8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/4jmPi5bXGO8",
    category: "Commercial",
    description: "Shikhara Films Production"
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: "https://img.youtube.com/vi/H8VyuWX-Fug/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/H8VyuWX-Fug",
    category: "Commercial",
    description: "Shikhara Films Production"
  },
  {
    id: 4,
    title: "Video 4",
    thumbnail: "https://img.youtube.com/vi/i7TR4yunrhg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/i7TR4yunrhg",
    category: "Commercial",
    description: "Shikhara Films Production"
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail: "https://img.youtube.com/vi/KR029gqJQAQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/KR029gqJQAQ",
    category: "Commercial",
    description: "Shikhara Films Production"
  },
];

// Instructions for customization:
// 1. Replace thumbnail URLs with your actual video thumbnails (stored in /public folder)
//    Example: thumbnail: "/thumbnails/video1.jpg"
// 
// 2. Replace videoUrl with your actual video embed URLs:
//    - YouTube: Get the video ID from the URL and use: "https://www.youtube.com/embed/VIDEO_ID"
//    - Vimeo: Use: "https://player.vimeo.com/video/VIDEO_ID"
//    - Self-hosted: Use: "/videos/your-video.mp4"
//
// 3. Update titles, categories, and descriptions to match your actual work
//
// 4. Add more videos by copying the structure above
