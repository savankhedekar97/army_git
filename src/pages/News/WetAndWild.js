import React from "react";
import "./NewsDetail.css";

function WetAndWild() {
  return (
    <div className="news-detail-wrapper">
      {/* ✅ Blurred background image */}
      <div
        className="news-bg-overlay"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/IMG_0041.jpg'})`,
        }}
      />

      {/* ✅ Banner image section */}
      <div className="news-image-box fade-in">
        <img
          src="/assets/documents/wet-and-wild-banner.jpg"
          alt="Wet and Wild Banner"
          className="news-banner-img"
        />
      </div>

      {/* ✅ Content glass box */}
      <div className="news-content-box slide-up">
        <h2>Wet and Wild Regatta</h2>
        <p>
          🌊 Dive into the action! This section will showcase event schedules,
          PDFs, and thrilling updates from the Wet and Wild Regatta.
        </p>
      </div>
    </div>
  );
}

export default WetAndWild;
