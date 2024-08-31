import React, { useState } from "react";
import BookCallBtn from "./BookCallBtn";

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
          <BookCallBtn section={"btn-book-call-services"} />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
