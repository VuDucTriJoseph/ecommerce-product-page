import { useProduct } from "../context/useProduct";

function Button() {
  const { addToCart } = useProduct();
  return (
    <button className="btn-add" onClick={addToCart}>
      <svg className="btn-add_icon">
        <use xlinkHref="/images/icon-cart.svg#icon-cart"></use>
      </svg>

      <span className="btn-add_text text-pre-3--bold">Add to cart</span>
    </button>
  );
}
export default Button;
