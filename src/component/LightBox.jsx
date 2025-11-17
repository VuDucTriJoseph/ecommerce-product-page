import { useState } from "react";

import Thumbnails from "./Thumbnails";
import NextButton from "./NextButton";
import { useProduct } from "../context/useProduct";

function LightBox() {
  const [showLightbox, setShowLightbox] = useState(true);
  const { product } = useProduct();
  // const images = product.images;
  console.log(product);
  return (
    <div className={`lightbox ${showLightbox ? "" : "hidden"}`}>
      <div className="lightbox__container">
        <div className="lightbox__btn">
          <div
            className="lightbox__btn-close"
            onClick={() => setShowLightbox(!showLightbox)}
          ></div>
        </div>
        <div className="lightbox__image">
          <img
            src={product.images[0].main}
            alt="product image"
            className="lightbox__img"
          />
          <NextButton customClass="forLightbox" />
        </div>
        <Thumbnails />
      </div>
    </div>
  );
}

export default LightBox;
