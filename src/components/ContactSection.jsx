import React from "react";

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__heading">Contact Me</h2>
        <h2 className="contact__subheading">
          Your Best Choice For 3D Rendering
        </h2>
        <div className="contact__details">
          <div>
            <h3 className="contact__details__key">Email</h3>
            <p className="contact__details__value">
              patriciajaramillo@gmail.com
            </p>
          </div>
          <div>
            <h3 className="contact__details__key">Phone</h3>
            <p className="contact__details__value">+1 (786)444-7777</p>
          </div>
          <div>
            <h3 className="contact__details__key">My Location</h3>
            <p className="contact__details__value">Miami Beach, FL</p>
          </div>
        </div>
        <a className="btn btn-book-call btn-book-call-contact" href="#">
          Book a Call
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
