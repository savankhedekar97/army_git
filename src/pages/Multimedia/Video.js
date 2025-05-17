import React, { useState } from "react";
import "./Video.css";

const videoList = [
  "/assets/videos/video_1.mp4",
  "/assets/videos/video_2.mp4",
  "/assets/videos/video_3.mp4",

  "/assets/videos/video_4.mp4",
];

export default function Video() {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <div className="videos-page">
      <h2 className="videos-title">Our Videos</h2>
      <div className="videos-grid">
        {videoList.map((src, idx) => (
          <div className="video-card" key={idx} style={{ "--order": idx + 1 }}>
            <div
              className="play-overlay"
              onClick={() => setModalVideo(src)}
              title="Click to Play"
            />
            <div className="video-frame">
              <video className="video-item" preload="metadata" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>

      {modalVideo && (
        <div className="video-modal" onClick={() => setModalVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalVideo(null)}>
              ×
            </button>
            <video controls autoPlay>
              <source src={modalVideo} type="video/mp4" />
              Your browser does not support this video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
