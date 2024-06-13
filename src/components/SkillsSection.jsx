import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faPersonShelter,
  faHouse,
  faComputer,
  faPencil,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

import SkillsCard from "./SkillsCard";

export default function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div>
          <div>
            <h3 className="skills__small__heading">Skills</h3>
            <h2>My Specialties</h2>
          </div>
          <div>
            <p>
              3D Rendering and animation for both interior and exterior design
            </p>
          </div>
        </div>
        <div className="skills__card__container">
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon className="skills__card__icon" icon={faCube} />
            }
            skillName={"3D Animation"}
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon
                className="skills__card__icon"
                icon={faPersonShelter}
              />
            }
            skillName={"Interior Design"}
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon className="skills__card__icon" icon={faHouse} />
            }
            skillName={"Exterior Design"}
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon
                className="skills__card__icon"
                icon={faComputer}
              />
            }
            skillName={"Rendering"}
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon className="skills__card__icon" icon={faPencil} />
            }
            skillName={"Drawing"}
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon
                className="skills__card__icon"
                icon={faListCheck}
              />
            }
            skillName={"Project Planning"}
          />
        </div>
      </div>
    </section>
  );
}
