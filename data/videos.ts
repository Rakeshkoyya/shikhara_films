// Video data for the Hero carousel - Shikhara Films YouTube Channel

export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  embedUrl: string;
  category: string;
  description?: string;
  isLocal?: boolean; // Flag to identify local video files
}

// Single source of truth - YouTube video IDs and titles
// To add/remove videos, just modify this array
export const VIDEO_DATA = [
  { id: "aJKALscpJAo", title: "#ShakeItUp with Minute Maid Pulpy Orange" },
  { id: "xuncfnpaJ8g", title: "Slurrp Farm" },
  { id: "1KpWOut2cVg", title: "Soft Touch" },
  { id: "jDU7JaON78w", title: "Soft Touch Teacher Meeting" },
  { id: "cgonm3mhDig", title: "SWITCH OFF FAN" },
  { id: "F6k52CjIhYY", title: "Amazon #HarPalFashionable" },
  { id: "s7yOoveNLK0", title: "Amazon - Now in Telugu" },
  { id: "8memTDPSlaM", title: "Amul" },
  { id: "KR029gqJQAQ", title: "Canny Forest Edge - Luxury Living in Nature" },
  { id: "i7TR4yunrhg", title: "Chellappan Vidya Mandir Ad" },
  { id: "H8VyuWX-Fug", title: "SR Prime School Campus" },
  { id: "4jmPi5bXGO8", title: "Dr. Devayya Election Campaign - Jobs" },
  { id: "zFLey-8Z3bM", title: "Dr. Devayya Election Campaign - Health" },
  { id: "jc9EW2vgXHE", title: "Dr. Devayya Election Campaign - Education" },
];

// Generate heroVideos from VIDEO_DATA using map
export const heroVideos: Video[] = VIDEO_DATA.map((video, index) => ({
  id: index + 1,
  title: video.title,
  thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${video.id}?autoplay=1`,
  category: "Commercial",
  description: "Shikhara Films Production",
}));
