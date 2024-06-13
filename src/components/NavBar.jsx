import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="nav-bar">
      {/* <ul className="off-screen-menu hidden">
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul> */}
      <div className="container">
        <div className="nav-icon-heading-container">
          <FontAwesomeIcon className="paint-icon" icon={faPaintBrush} />
          <h2>Patricia</h2>
        </div>
        {/* <i className="fa-solid fa-bars hidden"></i>
            <i className="fa-solid fa-x hidden"></i> */}
        <ul>
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
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
