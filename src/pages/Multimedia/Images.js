import React, { useEffect, useState } from 'react';
import './Images.css';

const imageList = [

  "/assets/gallery/image00000.jpg",
  "/assets/gallery/image00001.jpg",
  "/assets/gallery/image00002.jpg",
  "/assets/gallery/image00003.jpg",

  "/assets/gallery/image00004.jpg",
  "/assets/gallery/image00005.jpg",
  "/assets/gallery/image00006.jpg",
  "/assets/gallery/image00007.jpg",
  "/assets/gallery/image00008.jpg",
  "/assets/gallery/image00009.jpg",
  "/assets/gallery/image00010.jpg",
  "/assets/gallery/image00011.jpg",
  "/assets/gallery/image00012.jpg",
  "/assets/gallery/image00013.jpg",
  "/assets/gallery/image00014.jpg",
  "/assets/gallery/image00015.jpg",
  "/assets/gallery/image00016.jpg",
  "/assets/gallery/image00017.jpg",
  "/assets/gallery/image00018.jpg",
  "/assets/gallery/image00019.jpg",
  "/assets/gallery/image00020.jpg",
  "/assets/gallery/image00021.jpg",
  "/assets/gallery/image00022.jpg",
  "/assets/gallery/image00023.jpg",
  "/assets/gallery/image00024.jpg",
  "/assets/gallery/image00025.jpg",
  "/assets/gallery/image00026.jpg",
  "/assets/gallery/image00027.jpg",
  "/assets/gallery/image00028.jpg",
  "/assets/gallery/image00029.jpg",
  "/assets/gallery/image00030.jpg",
  "/assets/gallery/image00031.jpg",
  "/assets/gallery/image00032.jpg",
  "/assets/gallery/image00033.jpg",
  "/assets/gallery/image00034.jpg",
  "/assets/gallery/image00035.jpg",
  "/assets/gallery/image00036.jpg",


"/assets/gallery/image00037.jpg",
"/assets/gallery/image00038.jpg",
"/assets/gallery/image00039.jpg",
"/assets/gallery/image00040.jpg",
"/assets/gallery/image00041.jpg",




  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
  "/assets/gallery/IMG_0103.JPG",
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
  "/assets/gallery/IMG_9794.jpg",
  "/assets/gallery/IMG_9809.jpg",
  "/assets/gallery/image10.jpg",
  "/assets/gallery/image11.jpg",
  "/assets/gallery/image12.jpg",
  "/assets/gallery/image13.jpg",
  "/assets/gallery/image14.jpg",
  "/assets/gallery/image15.jpg",

  "/assets/gallery/image001.jpg",
  "/assets/gallery/image002.jpg",
  "/assets/gallery/image003.jpg",
  "/assets/gallery/image004.jpg",
  "/assets/gallery/image005.jpg",
  "/assets/gallery/image006.jpg",
  "/assets/gallery/image007.jpg",
  "/assets/gallery/image008.jpg",
  "/assets/gallery/image009.jpg",
  "/assets/gallery/image010.jpg",
  "/assets/gallery/image011.jpg",
  "/assets/gallery/image012.jpg",
  "/assets/gallery/image013.jpg",
  "/assets/gallery/image014.jpg",
  "/assets/gallery/image015.jpg",

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
              <img src={src} loading="lazy" alt={`gallery-${index}`} className="gallery-img" />
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
