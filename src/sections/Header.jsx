import { useProduct } from "../context/useProduct";
import Cart from "../component/Cart";

function Header() {
  const { cart, showCart, setShowCart } = useProduct();
  // console.log(cart.length);
  return (
    <header className="header">
      <svg className="header__logo">
        <use xlinkHref="/images/logo.svg#icon-logo"></use>
      </svg>
      <nav className="header__nav">
        <ul className="header__nav-items">
          <li className="header__nav-list">
            <a href="#" className="header__nav-link">
              Colections
            </a>
          </li>
          <li className="header__nav-list">
            <a href="#" className="header__nav-link">
              Men
            </a>
          </li>
          <li className="header__nav-list">
            <a href="#" className="header__nav-link header__nav-link-active">
              Woman
            </a>
          </li>
          <li className="header__nav-list">
            <a href="#" className="header__nav-link">
              About
            </a>
          </li>
          <li className="header__nav-list">
            <a href="#" className="header__nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
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
