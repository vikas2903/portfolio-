import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const Headerdata = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Skills",
      link: "/skills",
    },
    {
      id: 4,
      title: "Services",
      link: "/services",
    },
    {
      id: 5,
      title: "Projects",
      link: "/projects",
    },
    {
      id: 6,
      title: "Contact",
      link: "/contact",
    },
  ];

  const [isMenuopen, setisMenuopne] = useState(false);
  const toggleMenu = () => {
    setisMenuopne(true);
  };
  const closeMenu = () => {
    setisMenuopne(false);
  };

  return (
    <header className="header" id="header">
      <nav className="container-fluid navbar" aria-label="Main navigation">
        <div className="site-logo">
          <div className="logo-image">
            <p className="logo-text">
              VIKSA <span>PRASAD</span>
            </p>
          </div>
        </div>
        <div className="toggle-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-menu"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="icon icon-menu"
            viewBox="0 0 23 20"
          >
            <path
              d="M20.738 4H2.261C1.561 4 1 3.333 1 2.5S1.56 1 2.261 1h18.477c.7 0 1.261.667 1.261 1.5.024.833-.56 1.5-1.261 1.5zm-9.948 7.5H2.21C1.538 11.5 1 10.833 1 10s.538-1.5 1.21-1.5h8.58c.672 0 1.21.667 1.21 1.5.022.806-.516 1.5-1.21 1.5zm4.98 7.5H2.252C1.556 19 1 18.333 1 17.5S1.556 16 2.252 16h13.495c.696 0 1.252.667 1.252 1.5.023.833-.533 1.5-1.229 1.5z"
              fill="currentColor"
              stroke="#FFF"
              stroke-width="1.25"
            ></path>
          </svg>
        </div>

        <div className={`menu ${isMenuopen ? "active" : ""}`} id="menu">
          <div className="close" onClick={closeMenu}>&#128473;</div>
          <ul className="menu-list d-flex p-0 m-0">
            {Headerdata.map((item) => (
              <li key={item.id} className="mx-3">
                <Link to={item.link} id={`link-${item.id}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
