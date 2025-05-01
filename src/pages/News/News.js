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
      <div className="news-glass fade-in">
        <h2>News & Announcements</h2>
        <ul className="news-list">
          <li>
            <Link to="/news/youth-national">Youth National Commencien</Link>
          </li>
          <li>
            <Link to="/news/wet-and-wild">Wet and Wild Regatta</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default News;
