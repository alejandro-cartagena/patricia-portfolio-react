import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { useOverlay } from "../context/OverlayContext";

import projectsData from "../projectsData";
const { images } = projectsData;

function PhotoGallerySection() {
  const [data, setData] = useState({ img: "", i: 0 });
  const { setIsOverlayActive } = useOverlay();

  useEffect(() => {
    if (data.img) {
      // Disable scrolling when the overlay is active
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the overlay is inactive
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [data.img]);

  const viewImage = (img, i) => {
    setData({ img, i });
    setIsOverlayActive(true);
  };

  const closeImage = () => {
    setData({ img: "", i: 0 });
    setIsOverlayActive(false);
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action === "prev-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
  };

  return (
    <>
      {data.img && (
        <div className="photo-gallery__photo__screen">
          <button
            className="photo-gallery__photo__screen__close__btn"
            onClick={closeImage}
          >
            X
          </button>
          <button
            className="photo-gallery__photo__screen__arrow__btn arrow__btn__left"
            onClick={() => imgAction("prev-img")}
          >
            <FontAwesomeIcon
              className="photo-gallery__photo__screen__arrow__btn__icon"
              icon={faChevronLeft}
            />
          </button>
          <img
            src={data.img}
            alt=""
            srcSet=""
            style={{ width: "90%", maxWidth: "1200px", maxHeight: "100%" }}
          />
          <button
            className="photo-gallery__photo__screen__arrow__btn arrow__btn__right"
            onClick={() => imgAction("next-img")}
          >
            <FontAwesomeIcon
              className="photo-gallery__photo__screen__arrow__btn__icon"
              icon={faChevronRight}
            />
          </button>
        </div>
      )}
      <div className="photo-gallery" id="photo-gallery">
        <h1 className="photo-gallery__header">
          A <span style={{ color: "#fb7878" }}>Gallery</span> of my Works
        </h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt="project image"
                onClick={() => viewImage(image, index)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default PhotoGallerySection;
