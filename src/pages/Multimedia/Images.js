import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import Viewer from "react-images-viewer";
import "./Images.css";

const allPhotos = [
  { src: "/assets/gallery/IMG_0031.jpg" },
  { src: "/assets/gallery/IMG_0041.jpg" },
  { src: "/assets/gallery/IMG_0065.jpg" },
  { src: "/assets/gallery/IMG_0085.jpg" },
  { src: "/assets/gallery/IMG_0095.jpg" },
  { src: "/assets/gallery/IMG_0103.jpg" },
  { src: "/assets/gallery/IMG_0115.jpg" },
  { src: "/assets/gallery/IMG_0128.jpg" },
  { src: "/assets/gallery/IMG_0179.jpg" },
  { src: "/assets/gallery/IMG_0180.jpg" },
  { src: "/assets/gallery/IMG_0193.jpg" },
  { src: "/assets/gallery/IMG_0204.jpg" },
];

const Images = () => {
  const [items, setItems] = useState(allPhotos.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const fetchMoreData = () => {
    if (items.length >= allPhotos.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(allPhotos.slice(0, items.length + 6));
    }, 1000);
  };

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  const moveNext = () => {
    setCurrentImage((prev) => (prev + 1) % items.length);
  };

  const movePrev = () => {
    setCurrentImage((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="gallery-page">
      <video autoPlay muted loop id="background-video">
        <source src="/assets/gallery/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <h1 className="gallery-heading">Gallery</h1>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className="masonry-container"
        >
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.map((photo, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                <img src={photo.src} alt={`Gallery ${index}`} />
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>

        {viewerIsOpen && (
          <Viewer
            imgs={items.map((img) => ({ src: img.src }))}
            currImg={currentImage}
            isOpen={viewerIsOpen}
            onClose={closeLightbox}
            onClickNext={moveNext}
            onClickPrev={movePrev}
          />
        )}
      </div>
    </div>
  );
};

export default Images;
