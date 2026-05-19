import Image from "next/image";
import { FadeImageSlider } from "@/components/ui/fade-image-slider";

const skills = [
  {
    id: 1,
    name: "Example module from your existing material",
  },
  {
    id: 2,
    name: "Pilot scope built around one real workflow",
  },
  {
    id: 3,
    name: "SCORM-ready, mobile-ready, LMS-compatible delivery",
  },
  {
    id: 4,
    name: "Multilingual adaptation for frontline teams",
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
  {
    src: "/img/quiz3.png",
    alt: "Interactive training module follow-up screen",
  },
];

export function SkillOne() {
  return (
    <section className="skill-one" id="example-module">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 order-2 order-xl-1">
            <div className="skill-one__img">
              <div className="skill-one__img1">
                <FadeImageSlider slides={slides} />
              </div>
            </div>
          </div>

          <div className="col-xl-7 order-1 order-xl-2">
            <div className="skill-one__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <h2 className="sec-title__title tg-element-title">
                  What The Result <br /> <span>Looks Like</span>
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
                    <p className="skill-one__progress-item">
                      <Image
                        className="skill-one__progress-icon"
                        src="/icon/checkmark.png"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span>{skill.name}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <div className="skill-one__content-btn">
                <a className="thm-btn" href="#home">Start With A Pilot</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
