import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import highQualityImg from "../images/high-quality.png";
import creativeImg from "../images/design-thinking.png";
import customerImg from "../images/rating.png";

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__container">
          <h2 className="services__heading">
            Why I Have the Best 3D Rendering Services Around!
          </h2>
          <div className="services__line"></div>
          <div className="services__section">
            <h3 className="services__section__heading">Unmatched Quality</h3>
            <img
              className="services__icon"
              src={highQualityImg}
              alt=""
              srcSet=""
            />
            <p className="services__section__text">
              I use advanced rendering techniques to produce photorealistic
              images
            </p>
          </div>

          <FontAwesomeIcon className="services__arrow" icon={faArrowDown} />

          <div className="services__section">
            <h3 className="services__section__heading">Creative Expertise</h3>
            <img
              className="services__icon"
              src={creativeImg}
              alt=""
              srcSet=""
            />
            <p className="services__section__text">
              With a strong foundation in design, I bring a creative perspective
              to every project.
            </p>
          </div>

          <FontAwesomeIcon className="services__arrow" icon={faArrowDown} />

          <div className="services__section services__section__last">
            <h3 className="services__section__heading">
              Customer First Approach
            </h3>
            <img
              className="services__icon"
              src={customerImg}
              alt=""
              srcSet=""
            />
            <p className="services__section__text">
              I customize my services to meet the unique needs of each client,
              ensuring satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
