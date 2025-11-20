import { useProduct } from "../context/useProduct";
import Cart from "../component/Cart";
import MenuHeader from "../component/MenuHeader";

function Header() {
  const { cart, showCart, setShowCart } = useProduct();

  return (
    <header className="header">
      <svg className="header__logo">
        <use xlinkHref="/images/logo.svg#icon-logo"></use>
      </svg>
      <MenuHeader />
      <div className="header__cart">
        <svg
          className="header__cart-icon"
          onClick={() => setShowCart(!showCart)}
        >
          <use xlinkHref="/images/icon-cart.svg#icon-cart"></use>
        </svg>
        {cart.length > 0 && (
          <span className="header__cart-count">{`${cart.length}`}</span>
        )}
        <Cart />
      </div>
      <img src="/images/image-avatar.png" alt="" className="header__user-img" />
    </header>
  );
}

export default Header;
