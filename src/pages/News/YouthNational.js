import React from "react";
import "./News.css";

function YouthNational() {
  return (
    <div className="event-detail-wrapper">
      {/* ✅ Fixed Background Image Path using PUBLIC_URL */}
      <div
        className="event-bg-overlay"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/IMG_0031.jpg'})`,
        }}
      />

      {/* ✅ Banner Image */}
      <div className="event-image-box fade-in">
        <img
          src="/assets/documents/youth-national-banner.jpg"
          alt="Youth National Banner"
          className="event-banner-img"
        />
      </div>

      {/* ✅ Content Section */}
      <div className="event-content-box slide-up">
        <h2>Youth National Commencien</h2>
        <p>
          📄 Welcome to the Youth National Event. Stay tuned for official PDFs,
          race schedules, participant info, and final results — all will appear
          here soon.
        </p>
      </div>
    </div>
  );
}

export default YouthNational;
