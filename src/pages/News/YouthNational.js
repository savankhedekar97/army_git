import React from "react";
import "./NewsDetail.css";

function YouthNational() {
  return (
    <div className="news-detail-wrapper">
      {/* ✅ Fixed Background Image Path using PUBLIC_URL */}
      <div
        className="news-bg-overlay"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/IMG_0031.jpg'})`,
        }}
      />

      {/* ✅ Banner Image */}
      <div className="news-image-box fade-in">
        <img
          src="/assets/documents/youth-national-banner.jpg"
          alt="Youth National Banner"
          className="news-banner-img"
        />
      </div>

      {/* ✅ Content Section */}
      <div className="news-content-box slide-up">
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
