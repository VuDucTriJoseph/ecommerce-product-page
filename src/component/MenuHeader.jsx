import { useState } from "react";

const menu = ["Colections", "Men", "Woman", "About", "Contact"];

function MenuHeader() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="header__nav">
      <ul className="header__nav-items">
        {menu.map((item, index) => (
          <li
            className="header__nav-list"
            key={index}
            onClick={() => setActiveNav(index)}
          >
            <a
              href="#"
              className={`header__nav-link ${
                index === activeNav ? "header__nav-link-active" : ""
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuHeader;
