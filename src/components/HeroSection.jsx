import React from "react";
import PatriciaHeadshot from "../images/patriciaHeadshot.png";

function HeroSection() {
  return (
    <header>
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero__text">
            <h3 className="hero__small__heading">Hello, I'm</h3>
            <h1 className="heading">Patricia Jaramillo</h1>
            <h3 style={{ color: "#6a6c75", fontSize: "1.5rem" }}>
              Interior Designer & Rendering Specialist
            </h3>
            <p className="text">
              With a background in Interior Design and a passion for
              computer-generated imagery, Patricia Jaramillo specializes in
              rendering animations. She has collaborated with companies like
              Pollo Tropical and Bonet International, delivering realistic
              renders for a diverse range of clients and projects.
            </p>
            <a className="btn btn-primary" href="#">
              Explore My Work
            </a>
            <a className="btn btn-outline" href="#">
              About Me
            </a>
          </div>
          <div className="hero__image">
            <div className="hero__image__container">
              <img
                className="person__image"
                src={PatriciaHeadshot}
                alt="Patricia Jaramillo smiling"
                srcset=""
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeroSection;
