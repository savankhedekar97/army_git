import React, { useEffect, useState } from "react";
import "./Carousel.css";

const images = [

"/assets/slideImage/image01.jpg",
"/assets/slideImage/image02.jpg",
"/assets/slideImage/image03.jpg",
"/assets/slideImage/image04.jpg",
"/assets/slideImage/image05.jpg",
"/assets/slideImage/image06.jpg",
"/assets/slideImage/image07.jpg",
"/assets/slideImage/image08.jpg",
"/assets/slideImage/image09.jpg",




  "/assets/slideImage/image20.jpg",
  "/assets/slideImage/image19.jpg",
  "/assets/slideImage/image18.jpg",
  "/assets/slideImage/image17.jpg",
  "/assets/slideImage/image16.jpg",
  "/assets/slideImage/image1.jpg",
  "/assets/slideImage/image2.jpg",
  "/assets/slideImage/image3.jpg",
  "/assets/slideImage/image4.jpg",
  "/assets/slideImage/image15.jpg",
  "/assets/slideImage/image5.jpg",
  "/assets/slideImage/image6.jpg",
  "/assets/slideImage/image7.jpg",
  "/assets/slideImage/image12.jpg",
  "/assets/slideImage/image13.jpg",
  "/assets/slideImage/image8.jpg",
  "/assets/slideImage/image10.jpg",
  "/assets/slideImage/image11.jpg",
  "/assets/slideImage/image14.jpg",
];

const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) moveRight();
    }, 1000);
    return () => clearInterval(interval);
  }, [paused]);

  const moveLeft = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const moveRight = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  const getVisibleImages = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (centerIndex + i + images.length) % images.length;
      result.push(images[index]);
    }
    return result;
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="carousel-arrow left" onClick={moveLeft}>
        &#8249;
      </button>

      <div className="carousel-track">
        {getVisibleImages().map((src, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === 1 ? "active" : "inactive"}`}
          >
            <img loading="lazy" src={src} alt={`carousel-${i}`} />
            <div className="carousel-gradient" />
          </div>
        ))}
      </div>

      <button className="carousel-arrow right" onClick={moveRight}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
