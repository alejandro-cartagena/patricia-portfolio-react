import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
            <p className="services__section__text">
              I use advanced rendering techniques to produce images that are
              virtually indistinguishable from real photographs.
            </p>
            <p className="services__section__text">
              Every project is meticulously crafted, ensuring that every
              element, from textures to lighting, is perfect.
            </p>
          </div>

          <FontAwesomeIcon className="services__arrow" icon={faArrowDown} />

          <div className="services__section">
            <h3 className="services__section__heading">Creative Expertise</h3>
            <p className="services__section__text">
              With a strong foundation in design, I bring a creative perspective
              to every project.
            </p>
            <p className="services__section__text">
              I continuously explore new methods and ideas to keep my work fresh
              and original.
            </p>
          </div>

          <FontAwesomeIcon className="services__arrow" icon={faArrowDown} />

          <div className="services__section services__section__last">
            <h3 className="services__section__heading">
              Customer-Centric Approach
            </h3>
            <p className="services__section__text">
              I customize my services to meet the unique needs of each client,
              ensuring satisfaction.
            </p>
            <p className="services__section__text">
              Regular updates and open communication keep you informed and
              involved throughout the process.
            </p>
          </div>

          <h2 className="services__heading">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <div className="services__line"></div>
          <p className="services__section__text">
            Book a call with me today to discuss your project and see how I can
            bring your vision to life with stunning 3D renderings!
          </p>
          <a className="btn btn-book-call btn-book-call-services " href="#">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
