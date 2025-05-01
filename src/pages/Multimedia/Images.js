import React, { useEffect, useState } from 'react';
import './Images.css';

const imageList = [
  "/assets/gallery/DJI_0015.jpg",
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
  "/assets/gallery/IMG_0095.jpg",
  "/assets/gallery/IMG_0103.JPG",
  "/assets/gallery/IMG_0115.jpg",
  "/assets/gallery/IMG_0128.jpg",
  "/assets/gallery/IMG_0179.jpg",
  "/assets/gallery/IMG_0184.jpg",
  "/assets/gallery/IMG_0193.jpg",
  "/assets/gallery/IMG_0204.jpg",
  "/assets/gallery/IMG_0248.jpg",
  "/assets/gallery/IMG_0266.jpg",
  "/assets/gallery/IMG_0288.jpg",
  "/assets/gallery/IMG_0305.jpg",
  "/assets/gallery/IMG_0306.jpg",
  "/assets/gallery/IMG_0322.jpg",
  "/assets/gallery/IMG_0354.jpg",
  "/assets/gallery/IMG_0364.jpg",
  "/assets/gallery/IMG_0426.jpg",
  "/assets/gallery/IMG_0499.jpg",
  "/assets/gallery/IMG_9518.jpg",
  "/assets/gallery/IMG_9617.jpg",
  "/assets/gallery/IMG_9717.jpg",
  "/assets/gallery/IMG_9766.jpg",
  "/assets/gallery/IMG_9794.jpg",
  "/assets/gallery/IMG_9809.jpg",
  "/assets/gallery/IMG_9977.jpg"
];

export default function Images() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setActiveIndex((activeIndex + 1) % imageList.length);
  };

  const prevImage = () => {
    setActiveIndex((activeIndex - 1 + imageList.length) % imageList.length);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="gallery-wrapper">
      <div className="background-slideshow">
        {imageList.map((src, i) => (
          <div
            key={i}
            className={`bg-slide ${i === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="gallery-content">
        <div className="glass-title-box">
          <h1 className="section-title">Our Image Gallery</h1>
        </div>

        <div className="gallery-grid">
          {imageList.slice(0, visibleCount).map((src, index) => (
            <div className="gallery-card" key={index} onClick={() => openLightbox(index)}>
              <img src={src} alt={`gallery-${index}`} className="gallery-img" />
            </div>
          ))}
        </div>

        {visibleCount < imageList.length && (
          <div className="view-more-wrapper">
            <button className="view-more-btn" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}

        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
            <img src={imageList[activeIndex]} className="lightbox-image" alt="preview" />
            <div className="lightbox-nav">
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
