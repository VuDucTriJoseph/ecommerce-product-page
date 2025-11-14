import { useState } from "react";
import Thumbnails from "./Thumbnails";

const imagesText = [
  {
    main: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    main: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    main: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    main: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

function LightBox() {
  const [showLightbox, setShowLightbox] = useState(true);
  return (
    <div className={`lightbox ${showLightbox ? "" : "hidden"}`}>
      <div className="lightbox__container">
        <div className="lightbox__btn">
          <div
            className="lightbox__btn-close"
            onClick={() => setShowLightbox(!showLightbox)}
          ></div>
        </div>
        <img
          src={imagesText[0].main}
          alt="product image"
          className="lightbox__img"
        />
        <Thumbnails />
      </div>
    </div>
  );
}

export default LightBox;
