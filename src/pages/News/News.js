import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";

const images = [
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0095.jpg",
  "/assets/gallery/IMG_0115.jpg",
  "/assets/gallery/IMG_0184.jpg",
];

function News() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-wrapper">
      <div
        className="news-bg"
        style={{ backgroundImage: `url(${images[bgIndex]})` }}
      />

      <div className="news-glass zoom-in">
        <div className="news-heading">
          <div className="disco-icon-wrapper">
            <img
              src="/assets/images/newsicon.png"
              alt="News Icon"
              className="disco-icon"
            />
            <div className="disco-glow"></div>
          </div>
          <h2 className="news-title">News & Announcements</h2>
        </div>

        <ul className="news-list slide-up">
          <li>
            <Link to="/news/youth-national" className="fancy-link">
              <span>🏆 Youth National Commencien</span>
            </Link>
          </li>
          <li>
            <Link to="/news/wet-and-wild" className="fancy-link">
              <span>🌊 Wet and Wild Regatta</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default News;
