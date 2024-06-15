import React from "react";

import BuildingImg from "../images/building.jpg";
import BeigeInteriorImg from "../images/beige-interior.jpg";
import Lobby from "../images/lobby.jpg";
import ParkingLot from "../images/parking-lot.jpg";

function ProjectsSection() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <div className="projects-heading-container">
            <h3 className="skills__small__heading about__small__heading">
              Portfolio
            </h3>
            <h2 className="about-title projects-title">My Recent Projects</h2>
          </div>
          <div className="projects-container">
            <div className="project">
              <img className="project-img" src={BuildingImg} alt="" srcset="" />
              <p className="project-sub-heading">sub heading</p>
              <h3 className="project-title">Building</h3>
            </div>

            <div className="project">
              <img
                className="project-img"
                src={BeigeInteriorImg}
                alt=""
                srcset=""
              />
              <p className="project-sub-heading">sub heading</p>
              <h3 className="project-title">Building</h3>
            </div>

            <div className="project">
              <img className="project-img" src={ParkingLot} alt="" srcset="" />
              <p className="project-sub-heading">sub heading</p>
              <h3 className="project-title">Building</h3>
            </div>

            <div className="project">
              <img className="project-img" src={Lobby} alt="" srcset="" />
              <p className="project-sub-heading">sub heading</p>
              <h3 className="project-title">Building</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
