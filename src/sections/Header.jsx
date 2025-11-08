function Header() {
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
            <a href="#" className="header__nav-link">
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
        <svg className="header__cart-icon">
          <use xlinkHref="/images/icon-cart.svg#icon-cart"></use>
        </svg>
        <span className="header__cart-count">3</span>
      </div>
      <img src="/images/image-avatar.png" alt="" className="header__user-img" />
    </header>
  );
}

export default Header;
