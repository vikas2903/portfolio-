import React from "react";
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

  return (
    <header className="header" id="header">
      <nav className="container-fluid navbar" aria-label="Main navigation">
        <div className="site-logo">
          <div className="logo-image">
            <p className="logo-text">
              VIKSA <span >PRASAD</span>
            </p>
          </div>
        </div>

        <div className="menu" id="menu">
          <ul className="menu-list d-flex p-0 m-0" >
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
