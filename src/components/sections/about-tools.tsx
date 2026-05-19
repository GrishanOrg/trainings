import { FadeImageSlider } from "@/components/ui/fade-image-slider";

const slides = [
  {
    src: "/img/retail_simulator.png",
    alt: "Retail workflow simulator screen",
  },
  {
    src: "/img/scanner_simulator.png",
    alt: "Scanner workflow simulator screen",
  },
];

export function AboutTools() {
  return (
    <section className="about-two about-two--tools">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <h2 className="sec-title__title tg-element-title">
                  Train <span>Real Tools</span>, Not Just Correct Answers
                </h2>
              </div>

              <div className="about-two__content-text1">
                <p>
                  Interactive training can cover both workplace decisions and
                  step-by-step operational workflows — from safety moments on
                  the floor to checkout systems, handheld devices, and
                  equipment procedures.
                </p>
              </div>

              <div className="about-two__content-bottom">
                <div className="btn-box">
                  <a className="thm-btn" href="#result">Discuss Your Tool Flow</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-two__img about-two__img--slider">
              <div className="about-two__img-slider">
                <FadeImageSlider slides={slides} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
