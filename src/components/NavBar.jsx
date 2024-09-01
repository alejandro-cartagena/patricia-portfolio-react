import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { useOverlay } from "../context/OverlayContext";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const location = useLocation();
  const { isOverlayActive } = useOverlay();

  const setNavScrollEffect = () => {
    if (window.scrollY >= 83) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", setNavScrollEffect);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav
      className={`nav-bar ${navScroll ? "active" : ""}`}
      style={{
        zIndex: isOverlayActive ? 0 : 10000,
        transition: isOverlayActive ? "none" : "ease-in 0.2s",
      }}
    >
      {menuOpen && (
        <ul className="off-screen-menu">
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/#hero">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/#about">
              About Me
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/#projects">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/book">
              Book Call
            </Link>
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
        <Link className="nav-logo" to="/#hero">
          <div className="nav-icon-heading-container">
            <FontAwesomeIcon className="paint-icon" icon={faPaintBrush} />
            <h2>Patricia</h2>
          </div>
        </Link>
        {/* <i className="fa-solid fa-bars hidden"></i>
            <i className="fa-solid fa-x hidden"></i> */}
        <ul className="nav-ul-big-screens">
          <li>
            <Link to="/#hero">Home</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#projects">Portfolio</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <li>
            <Link to="/book">Book Call</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
