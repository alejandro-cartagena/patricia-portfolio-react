import React from "react";

import BuildingImg from "../images/building.jpg";
import BeigeInteriorImg from "../images/beige-interior.jpg";
import Lobby from "../images/lobby.jpg";
import ParkingLot from "../images/parking-lot.jpg";

// React Tilt for hover effect

import { Tilt } from "react-tilt";

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
              <div className="project-card-content">
                <img
                  className="project-img"
                  src={BuildingImg}
                  alt=""
                  srcSet=""
                />
                <p className="project-sub-heading">sub heading</p>
                <h3 className="project-title">Building</h3>
              </div>
            </Tilt>

            <Tilt options={defaultOptions} className="project-card">
              <div className="project-card-content">
                <img
                  className="project-img"
                  src={BeigeInteriorImg}
                  alt=""
                  srcSet=""
                />
                <p className="project-sub-heading">sub heading</p>
                <h3 className="project-title">Building</h3>
              </div>
            </Tilt>

            <Tilt options={defaultOptions} className="project-card">
              <div className="project-card-content">
                <img
                  className="project-img"
                  src={ParkingLot}
                  alt=""
                  srcSet=""
                />
                <p className="project-sub-heading">sub heading</p>
                <h3 className="project-title">Building</h3>
              </div>
            </Tilt>

            <Tilt options={defaultOptions} className="project-card">
              <div className="project-card-content">
                <img className="project-img" src={Lobby} alt="" srcSet="" />
                <p className="project-sub-heading">sub heading</p>
                <h3 className="project-title">Building</h3>
              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
