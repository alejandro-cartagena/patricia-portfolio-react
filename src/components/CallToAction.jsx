import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookCallBtn from "./BookCallBtn";
import { InlineWidget } from "react-calendly";

function CallToAction() {
  return (
    <div className="call-to-action" id="call-to-action">
      <div className="container">
        <div className="services__container">
          <h2 className="services__heading">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <div className="services__line"></div>
          <p className="services__section__text">
            Book a call with me today to discuss your project and see how I can
            bring your vision to life with stunning 3D renderings!
          </p>
          <Link to="/book" className="btn btn-book-call btn-book-call-services">
            Book a Call
          </Link>
          {/* <BookCallBtn section={"btn-book-call-services"} /> */}
          {/* <InlineWidget url="https://calendly.com/alejandrocartagena68" /> */}
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
