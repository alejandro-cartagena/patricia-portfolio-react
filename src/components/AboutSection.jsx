import React from "react";
import { Link } from "react-router-dom";

import PatriciaAboutImg from "../images/aboutPicPatricia.jpg";
function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-flex-item-text">
            <h3 className="about__small__heading">About Me</h3>
            <h2 className="about-title">Patricia Jaramillo</h2>
            <p className="about-text">
              Patricia has over 20 years of experience in the construction
              industry. She began her career working at the municipality of
              Miami Beach. Her work with the municipality was the catalyst for
              her to pursue Interior Design and ultimately led to her finding
              her passion in rendering. Being able to assist clients in
              visualizing their completed projects prior to even breaking ground
              has been an incredibly rewarding experience. Patricia enjoys being
              able to show her clients various adaptations as to how their
              vision can be brought to life through her skills as a 3D and
              animation art director. Notable clients include Bonet
              International, Pollo Tropical, Estrutura LLC and many more.
            </p>
            <p className="about-text">
              The price for her rendering services is competitive and will vary
              depending on the needs of the client. If you need any additional
              information or would like to request a quote for your project,
              please contact her.
            </p>
            <div className="about-btns">
              <Link className="btn btn-primary" to="/#projects">
                Explore My Work
              </Link>
              <Link className="btn btn-outline" to="/#contact">
                Contact
              </Link>
            </div>
          </div>
          <img className="about-img" src={PatriciaAboutImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
