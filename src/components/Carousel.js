import React, { useEffect, useState } from 'react';

const images = [
  "/assets/slideImage/image1.jpg",
  "/assets/slideImage/image2.jpg",
  "/assets/slideImage/image3.jpg",
  "/assets/slideImage/image4.jpg",
  "/assets/slideImage/image5.jpg",
  "/assets/slideImage/image6.jpg",
  "/assets/slideImage/image7.jpg",
  "/assets/slideImage/image8.jpg",
  "/assets/slideImage/image9.jpg",
];

const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      moveRight();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
    <div style={styles.container}>
      <button onClick={moveLeft} style={styles.arrow}>&#8249;</button>

      <div style={styles.carousel}>
        {getVisibleImages().map((src, i) => (
          <div
            key={i}
            style={{
              ...styles.imageWrapper,
              transform: i === 1 ? 'scale(1.1)' : 'scale(1.1)',
              zIndex: i === 1 ? 2 : 2,
            }}
          >
            <img src={src} style={styles.image} alt={`carousel-${i}`} />
          </div>
        ))}
      </div>

      <button onClick={moveRight} style={styles.arrow}>&#8250;</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 'auto',
  
    position: 'relative',
  },
  arrow: {
    fontSize: '2rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#333',
    zIndex: 10,
    userSelect: 'none',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    overflow: 'hidden',
    width: '100%',
  },
  imageWrapper: {
    position: 'relative',
    width: '500px',
    height: '300px',
    transition: 'transform 0.5s ease',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    flexShrink: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    display: 'block',
  },
};

export default Carousel;
