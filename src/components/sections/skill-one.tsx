import { FadeImageSlider } from "@/components/ui/fade-image-slider";

const skills = [
  {
    id: 1,
    name: "Example module from your existing material",
    width: "100%",
    value: "Included",
  },
  {
    id: 2,
    name: "Pilot scope built around one real workflow",
    width: "100%",
    value: "Pilot",
  },
  {
    id: 3,
    name: "SCORM-ready, mobile-ready, LMS-compatible delivery",
    width: "100%",
    value: "Ready",
  },
  {
    id: 4,
    name: "Multilingual adaptation for frontline teams",
    width: "100%",
    value: "EU",
  },
];

const slides = [
  {
    src: "/img/quiz1.png",
    alt: "Interactive training quiz screen",
  },
  {
    src: "/img/quiz2.png",
    alt: "Interactive training module screen",
  },
];

export function SkillOne() {
  return (
    <section className="skill-one" id="result">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="skill-one__img">
              <div className="skill-one__img1">
                <FadeImageSlider slides={slides} />
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="skill-one__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <h2 className="sec-title__title tg-element-title">
                  What The Result <br /> Looks <span>Like</span>
                </h2>
              </div>

              <div className="skill-one__content-text">
                <p>
                  We take one of your existing SOPs, PDFs, slide decks or
                  videos and turn it into a short interactive training module.
                  The outcome is a real pilot deliverable that works on mobile,
                  fits your LMS and can be adapted for multilingual frontline
                  teams.
                </p>
              </div>

              <ul className="skill-one__progress">
                {skills.map((skill) => (
                  <li key={skill.id}>
                    <div className="skill-one__progress-single">
                      <div className="title-box">
                        <p>{skill.name}</p>
                      </div>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent={skill.value}
                          style={{ width: skill.width }}
                        >
                          <div className="count-text">{skill.value}</div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="skill-one__content-btn">
                <a className="thm-btn" href="#home">
                  Start With A Pilot
                  <i className="icon-right-arrow21" />
                  <span className="hover-btn hover-bx" />
                  <span className="hover-btn hover-bx2" />
                  <span className="hover-btn hover-bx3" />
                  <span className="hover-btn hover-bx4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
