import React from 'react';
import './Video.css';

const videoList = [
  '/assets/videos/video_1.mp4',
  '/assets/videos/video_2.mp4',
  '/assets/videos/video_3.mp4',
];

export default function Video() {
  return (
    <div className="videos-page">
      <h2 className="videos-title">Our Videos</h2>
      <div className="videos-grid">
        {videoList.map((src, idx) => (
          <div className="video-card" key={idx} style={{ '--order': idx + 1 }}>
            <div className="play-overlay" />
            <video
              controls
              className="video-item"
              preload="metadata"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
