import React from "react";
import PatriciaAboutImg from "../images/patriciaAbout.png";
function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-flex-item-text">
            <h3 className="skills__small__heading about__small__heading">
              About Me
            </h3>
            <h2 className="about-title">Patricia Jaramillo</h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo nostrum ab fuga inventore minima consequuntur ducimus
              voluptatem pariatur non quam eum, nulla magnam quasi harum illo
              laudantium voluptatibus maiores rem! Voluptate, amet culpa unde
              officiis non blanditiis distinctio? Quos odit laborum non quia
              quod dolorem quo dolorum maiores ullam ipsam officia doloribus
              voluptatibus possimus labore ut, aspernatur quibusdam eaque atque.
            </p>
            <p className="about-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatem architecto eligendi officiis, laboriosam amet, adipisci
              assumenda, pariatur rerum odio fuga harum magni consequuntur
              quisquam minima. Commodi hic modi fuga.
            </p>
          </div>
          <img className="about-img" src={PatriciaAboutImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
