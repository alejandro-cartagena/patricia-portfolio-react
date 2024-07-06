import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faBars, faX } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const setNavScrollEffect = () => {
    if (window.scrollY >= 83) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", setNavScrollEffect);

  return (
    <nav className={`nav-bar ${navScroll ? "active" : ""}`}>
      {menuOpen && (
        <ul className="off-screen-menu">
          <li>
            <a onClick={() => setMenuOpen(false)} href="#hero">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#projects">
              Portfolio
            </a>
          </li>
        </ul>
      )}

      {menuOpen ? (
        <FontAwesomeIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className="burger-menu"
          icon={faX}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className="burger-menu"
          icon={faBars}
        />
      )}

      <div className="container">
        <a className="nav-logo" href="#hero">
          <div className="nav-icon-heading-container">
            <FontAwesomeIcon className="paint-icon" icon={faPaintBrush} />
            <h2>Patricia</h2>
          </div>
        </a>
        {/* <i className="fa-solid fa-bars hidden"></i>
            <i className="fa-solid fa-x hidden"></i> */}
        <ul className="nav-ul-big-screens">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
