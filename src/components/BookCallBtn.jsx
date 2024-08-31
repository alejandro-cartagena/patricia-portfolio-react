import React, { useState } from "react";
import { PopupModal } from "react-calendly";

function BookCallBtn({ section }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className={`btn btn-book-call ${section}`}
      >
        Book a Call
      </button>
      <PopupModal
        url="https://calendly.com/alejandrocartagena68"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
      />
    </div>
  );
}

export default BookCallBtn;
