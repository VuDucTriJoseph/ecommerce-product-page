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
  return (
    <div className="thumbnails">
      {imagesText.map((thumb, index) => (
        <div
          key={index}
          className={`${
            index === 2 ? "thumbnails__active" : ""
          } thumbnails__item`}
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
