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
              "Bring your vision to life with stunning 3D animations. My animations add dynamism and realism to your projects, making them more engaging and visually appealing."
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
              "Experience photorealistic renderings that showcase every detail of your designs. My rendering services provide high-quality, lifelike images that help you visualize and refine your projects."
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
              "Transform spaces with innovative interior design solutions. My expertise in creating functional and aesthetically pleasing environments ensures that every project reflects your unique style and needs."
            }
          />
        </div>
      </div>
    </section>
  );
}
