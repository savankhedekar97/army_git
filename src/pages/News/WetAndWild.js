import React from "react";
import "./News.css";

function WetAndWild() {
  return (
    <div className="event-detail-wrapper">
      {/* ✅ Blurred background image */}
      <div
        className="event-bg-overlay"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/IMG_0041.jpg'})`,
        }}
      />

      {/* ✅ Banner image section */}
      <div className="event-image-box fade-in">
        <img
          src="/assets/documents/wet-and-wild-banner.jpg"
          alt="Wet and Wild Banner"
          className="event-banner-img"
        />
      </div>

      {/* ✅ Content glass box */}
      <div className="event-content-box slide-up">
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
