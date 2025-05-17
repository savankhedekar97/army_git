import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";

const images = [
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
];

function News() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-wrapper">
      <div
        className="news-bg"
        style={{ backgroundImage: `url(${images[bgIndex]})` }}
      />

      <div className="news-glass zoom-in">
        {/* Header */}
        <div className="news-row">
          <img
            src="/assets/images/LOGO NOAI.jpg"
            alt="NOAI Logo"
            className="news-icon"
          />
          <h2 className="news-title">News & Announcements</h2>
          <img
            src="/assets/flaglogo.jpg"
            alt="Flag Logo"
            className="news-icon right"
          />
        </div>

        {/* News List */}
        <ul className="news-list slide-up">
          <li className="news-item">
            <div className="news-block">
              <img
                src="/assets/youthlogo.jpg"
                alt="Youth Logo"
                className="news-icon"
              />
              <Link to="/news/youth-national" className="fancy-link">
                <span>Youth National Commencien</span>
              </Link>
            </div>
          </li>

          <li className="news-item">
            <div className="news-block">
              <img
                src="/assets/images/LOGO NOAI.jpg"
                alt="NOAI Logo"
                className="news-icon"
              />
              <Link to="/news/wet-and-wild" className="fancy-link">
                <span>Wet and Wild Regatta</span>
              </Link>
            </div>
          </li>

          <li className="news-item">
            <div className="news-block">
              <img
                src="/assets/youthlogo.jpg"
                alt="Youth Logo"
                className="news-icon"
              />
              <a
                href="/assets/documents/PRE EVENT PRESS RELEASE.pdf"
                className="fancy-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>PRE EVENT PRESS RELEASE</span>
              </a>
            </div>
          </li>

          <li className="news-item">
            <div className="news-block">
              <img
                src="/assets/youthlogo.jpg"
                alt="Youth Logo"
                className="news-icon"
              />
              <a
                href="/assets/documents/PRESS BRIEF OPENING CEREMONY.pdf"
                className="fancy-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>PRESS BRIEF OPENING CEREMONY</span>
              </a>
            </div>
          </li>

          {/*  NEW BLOCK FOR POST EVENT */}
          <li className="news-item">
            <div className="news-block">
              <img
                src="/assets/youthlogo.jpg"
                alt="Youth Logo"
                className="news-icon"
              />
              <a
                href="/assets/documents/PRESS BRIEF POST EVENT.pdf"
                className="fancy-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>PRESS BRIEF POST EVENT</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Sponsor Section */}
      <div className="sponsor-glass slide-up">
        <h3 className="sponsor-title">🤝 Special Thanks to Our Sponsors</h3>
        <p className="sponsor-subtext">We gratefully acknowledge the incredible support of:</p>

        <div className="sponsor-cards">
          <div className="sponsor-card glow">
            <img src="/assets/resultClassImage/logo/sbi.jpg" alt="SBI Logo" />
            <span><strong>SBI</strong><br />Banking Partner 💰</span>
          </div>
          <div className="sponsor-card glow">
            <img src="/assets/resultClassImage/logo/itus.png" alt="ITUS SHM Logo" />
            <span><strong>ITUS SHM</strong><br />Sports Partner 🏅</span>
          </div>
          <div className="sponsor-card glow">
            <img src="/assets/resultClassImage/logo/dominos.jpg" alt="Domino's Logo" />
            <span><strong>Domino’s Pizza</strong><br />Jubilant Food partner Dominos 🍕</span>
          </div>
        </div>

        <p className="sponsor-note">⛵ Your partnership fuels our sails — thank you for being part of our journey!</p>
      </div>
    </div>
  );
}

export default News;
