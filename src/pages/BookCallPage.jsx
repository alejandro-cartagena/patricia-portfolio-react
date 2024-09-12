import { InlineWidget } from "react-calendly";
import ScrollToTop from "../components/ScrollToTop";

export default function BookCallPage() {
  return (
    <div className="book-call">
      <ScrollToTop />
      <h1 className="book-call__heading container">
        Book a <span style={{ color: "#fb7878" }}>FREE</span> consultation with
        me
      </h1>
      <p className="book-call__small__text container">
        Let's discuss how I can bring your ideas to life with stunning 3D
        renderings
      </p>
      <div className="container book-call__calendly__container">
        <InlineWidget url="https://calendly.com/alejandrocartagena68/30min" />
      </div>
    </div>
  );
}
