import Thumbnails from "./Thumbnails";
import NextButton from "./NextButton";
import { useProduct } from "../context/useProduct";
import LightBox from "./LightBox";

function ProductImg() {
  const { product, loading, showLightbox, setShowLightbox, currentIndex } =
    useProduct();
  // const images = product.images;
  // console.log(loading);
  // console.log(product);

  return (
    <div className="productImg">
      <div className="productImg__container">
        {loading ? (
          <div className="productImg__image">
            <p className="text-pre-2 ">Loading...</p>
          </div>
        ) : (
          <div className="productImg__image">
            <img
              src={product?.images[currentIndex]?.main}
              alt="product image"
              className="productImg__img"
            />
            <div
              className="productImg__showLbox"
              onClick={() => setShowLightbox(!showLightbox)}
            ></div>
            {/* <LightBox /> */}
            <NextButton />
          </div>
        )}

        <Thumbnails />
      </div>
    </div>
  );
}

export default ProductImg;
