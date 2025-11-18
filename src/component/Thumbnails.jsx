import { useProduct } from "../context/useProduct";

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

function Thumbnails() {
  const { product, currentIndex, setCurrentIndex } = useProduct();
  return (
    <div className="thumbnails">
      {product?.images.map((thumb, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? "thumbnails__active" : ""
          } thumbnails__item`}
          onClick={() => setCurrentIndex(index)}
        >
          <img
            src={thumb.thumbnail}
            alt={`Product thumbnail ${index + 1}`}
            className="thumbnails__img"
          />
        </div>
      ))}
    </div>
  );
}

export default Thumbnails;
