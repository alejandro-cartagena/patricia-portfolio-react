import React from "react";

import BuildingImg from "../images/building.jpg";
import portsViewImg1 from "../images/portsViewImg1.jpg";
import Lobby from "../images/lobby.jpg";
import ParkingLot from "../images/parking-lot.jpg";
import PolloTropicalImg from "../images/polloTropicalVideoThumbnail1.png";
import houseImg1 from "../images/houseImg1.png";
import costaRicaImg1 from "../images/costaRicaImg1.png";
// React Tilt for hover effect

import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
  speed: 200, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function ProjectsSection() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <div className="projects-heading-container">
            <h3 className="projects__small__heading">Portfolio</h3>
            <h2 className="about-title projects-title">My Recent Projects</h2>
          </div>
          <div className="projects-container">
            <Tilt options={defaultOptions} className="project-card">
              <Link className="project-card-link" to={"/project/0"}>
                <div className="project-card-content">
                  <img
                    className="project-img"
                    src={portsViewImg1}
                    alt=""
                    srcSet=""
                  />
                  <p className="project-sub-heading">Bonet International</p>
                  <h3 className="project-title">Portsview - Aventura</h3>
                </div>
              </Link>
            </Tilt>

            <Tilt options={defaultOptions} className="project-card">
              <Link className="project-card-link" to={"/project/1"}>
                <div className="project-card-content">
                  <img className="project-img" src={Lobby} alt="" srcSet="" />
                  <p className="project-sub-heading">Building in California</p>
                  <h3 className="project-title">Blue Mountain</h3>
                </div>
              </Link>
            </Tilt>

            <Tilt options={defaultOptions} className="project-card">
              <Link className="project-card-link" to={"/project/2"}>
                <div className="project-card-content">
                  <img
                    className="project-img"
                    src={PolloTropicalImg}
                    alt=""
                    srcSet=""
                  />
                  <p className="project-sub-heading">FAU & Miramar, Florida</p>
                  <h3 className="project-title">Pollo Tropical</h3>
                </div>
              </Link>
            </Tilt>

            {/* Parking Lot */}
            <Tilt options={defaultOptions} className="project-card">
              <Link className="project-card-link" to={"/project/3"}>
                <div className="project-card-content">
                  <img
                    className="project-img"
                    src={ParkingLot}
                    alt=""
                    srcSet=""
                  />
                  <p className="project-sub-heading">Construction Technology</p>
                  <h3 className="project-title">Parking Plaza</h3>
                </div>
              </Link>
            </Tilt>

            <Tilt options={defaultOptions} className="project-card">
              <Link className="project-card-link" to={"/project/4"}>
                <div className="project-card-content">
                  <img
                    className="project-img"
                    src={houseImg1}
                    alt=""
                    srcSet=""
                  />
                  <p className="project-sub-heading">House</p>
                  <h3 className="project-title">House for Client</h3>
                </div>
              </Link>
            </Tilt>

            <Tilt options={defaultOptions} className="project-card">
              <Link className="project-card-link" to={"/project/5"}>
                <div className="project-card-content">
                  <img
                    className="project-img"
                    src={costaRicaImg1}
                    alt=""
                    srcSet=""
                  />
                  <p className="project-sub-heading">Costa Rica</p>
                  <h3 className="project-title">Hotel Concept</h3>
                </div>
              </Link>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
