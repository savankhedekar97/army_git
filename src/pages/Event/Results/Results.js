import React from "react";
import "./Results.css";

const resultClasses = [
  "OPTIMIST",
  "ILCA 4",
  "29ER",
  "IQ FOILS",
  "TECHNO 293",
  "INTERNATIONAL 420 (MIXED)",
];

function Results() {
  return (
    <div className="results-wrapper">
      {/* Background Blur */}
      <div
        className="results-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/gallery/IMG_0031.jpg"})`,
        }}
      />

      {/* Title */}
      <h2 className="results-title">🎌 YAI YOUTH NATIONALS – 2025</h2>

      {/* Results Grid */}
      <div className="results-grid">
        {resultClasses.map((className, index) => (
          <div className="result-card fade-in" key={index}>
            <h3>{className}</h3>
            <div className="result-actions">
              <a href="#" className="view-btn">🔍 View</a>
              <a href="#" className="download-btn">⬇️ Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
