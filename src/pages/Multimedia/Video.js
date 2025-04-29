// src/pages/Multimedia/Video.js
import React from 'react';
import './Video.css';  // <-- यहाँ Video.css ही रहेगा

const videoList = [
  '/assets/videos/video1.mp4',
  '/assets/videos/video2.mp4',
  '/assets/videos/video3.mp4',
  // अपनी बाकी videos के filenames
];

export default function Video() {
  return (
    <div className="videos-page">
      <h2 className="videos-title">Our Videos</h2>
      <div className="videos-grid">
        {videoList.map((src, idx) => (
          <div className="video-card" key={idx}>
            <video controls className="video-item">
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
