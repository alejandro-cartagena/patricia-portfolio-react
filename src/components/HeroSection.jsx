import React from 'react'
import PatriciaHeadshot from "../images/patriciaHeadshot.png"

function HeroSection() {
  return (
    <header>
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero__text">
                    <h1 className="heading">Patricia Jaramillo</h1>
                    <h3>3D Animation Specialist</h3>
                    <p className="text">Patricia Jaramillo has studied Interior Design, which
                        after finding her passion for the computers, she has
                        been specialized in rendering animation, in her short
                        career period, she had an opportunity to work with
                        companies such as Pollo Tropical, Bonet International,
                        and regular clients who is looking a realistic renders for
                        their projects.</p>
                    <a className="btn btn-primary" href="#">Explore My Work</a>
                    <a className="btn btn-outline" href="#">About Me</a>
                </div>
                <div className="hero__image">
                    <div className="hero__image__container">
                        <img className="person__image" src={PatriciaHeadshot} alt="Patricia Jaramillo smiling" srcset="" />
                    </div>
                </div>
            </div>
        </section>
    </header>
  )
}

export default HeroSection