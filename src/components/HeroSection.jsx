import React from 'react'
import PatriciaHeadshot from "../images/patriciaHeadshot.png"

function HeroSection() {
  return (
    <header>
        <section class="hero" id="hero">
            <div class="container">
                <div class="hero__text">
                    <h1 class="heading">Patricia Jaramillo</h1>
                    <h3>3D Animation Specialist</h3>
                    <p class="text">Patricia Jaramillo has studied Interior Design, which
                        after finding her passion for the computers, she has
                        been specialized in rendering animation, in her short
                        career period, she had an opportunity to work with
                        companies such as Pollo Tropical, Bonet International,
                        and regular clients who is looking a realistic renders for
                        their projects.</p>
                    <a class="btn btn-primary" href="#">Explore My Work</a>
                    <a class="btn btn-outline" href="#">About Me</a>
                </div>
                <div class="hero__image">
                    <div class="hero__image__container">
                        <img class="person__image" src={PatriciaHeadshot} alt="Patricia Jaramillo smiling" srcset="" />
                    </div>
                </div>
            </div>
        </section>
    </header>
  )
}

export default HeroSection