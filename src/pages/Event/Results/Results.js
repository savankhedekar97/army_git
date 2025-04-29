// src/pages/Event/Results.js

import React, { useState, useEffect } from "react";
import "./Results.css";

const images = [
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
];

// Results data
const raceResults = [
  { date: "28 April 2025", event: "Mumbai Harbour Race", winner: "Team Alpha" },
  { date: "27 April 2025", event: "Goa Coastal Sprint", winner: "Team OceanX" },
  { date: "26 April 2025", event: "Chennai Marina Regatta", winner: "Wave Riders" },
  // 🔥 Yahan daily nayi line add karte rehna
];

const Results = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="results-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="results-overlay">
        <div className="results-card">
          <h1>Latest Race Results</h1>
          <table className="results-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              {raceResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.date}</td>
                  <td>{result.event}</td>
                  <td>{result.winner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
