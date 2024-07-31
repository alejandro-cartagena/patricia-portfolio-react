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
            <h3 className="skills__small__heading">Services</h3>
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
            skillDescription={
              "Bring your vision to life with stunning 3D animations."
            }
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon
                className="skills__card__icon"
                icon={faComputer}
              />
            }
            skillName={"Rendering"}
            skillDescription={
              "Experience photorealistic renderings showcasing every detail of your designs."
            }
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon
                className="skills__card__icon"
                icon={faPersonShelter}
              />
            }
            skillName={"Interior Design"}
            skillDescription={
              "Transform spaces with innovative interior design solutions."
            }
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon className="skills__card__icon" icon={faHouse} />
            }
            skillName={"Exterior Design"}
            skillDescription={
              "Revamp exteriors with cutting-edge design solutions."
            }
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon className="skills__card__icon" icon={faPencil} />
            }
            skillName={"Technical Drawing"}
            skillDescription={
              "Capability to read and interpret architectural and engineering drawings."
            }
          />
          <SkillsCard
            skillIcon={
              <FontAwesomeIcon
                className="skills__card__icon"
                icon={faListCheck}
              />
            }
            skillName={"Project Planning"}
            skillDescription={
              "Streamline success with comprehensive project planning solutions."
            }
          />
        </div>
      </div>
    </section>
  );
}
