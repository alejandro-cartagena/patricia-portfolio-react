import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faBars, faX } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      {menuOpen && (
        <ul className="off-screen-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
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
        <div className="nav-icon-heading-container">
          <FontAwesomeIcon className="paint-icon" icon={faPaintBrush} />
          <h2>Patricia</h2>
        </div>
        {/* <i className="fa-solid fa-bars hidden"></i>
            <i className="fa-solid fa-x hidden"></i> */}
        <ul className="nav-ul-big-screens">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
