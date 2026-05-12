/* eslint-disable @next/next/no-img-element */

import { FadeImageSlider } from "@/components/ui/fade-image-slider";

const slides = [
  {
    src: "/img/uncertancy0.png",
    alt: "Uncertainty training scenario screen",
  },
  {
    src: "/img/uncertancy1.png",
    alt: "Uncertainty training decision screen",
  },
];

export function AboutOne() {
  return (
    <section className="about-one" id="problem">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <h2 className="sec-title__title tg-element-title">
                  Static Training Fails <br />
                  <span>On The Floor</span>
                </h2>
              </div>

              <div className="about-one__status-row">
                <div className="about-one__status about-one__status--ok">
                  <span className="about-one__status-icon about-one__status-icon--ok icon-check1" />
                  <div className="about-one__status-copy">
                    <strong>FORMAL COMPLETION</strong>
                  </div>
                </div>

                <div className="about-one__status about-one__status--risk">
                  <span className="about-one__status-icon about-one__status-icon--risk">
                    !
                  </span>
                  <div className="about-one__status-copy">
                    <strong>REALITY: NOT READY</strong>
                  </div>
                </div>
              </div>

              <div className="about-one__content-text1">
                <p>
                  Training content is often outdated, hard to update, and too
                  passive for real operational decisions. People complete the
                  course, but still do not know what to do at work when the
                  moment comes.
                </p>
              </div>

              <div className="about-two__content-text2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p>
                          <span className="icon-check1" /> Outdated content is
                          hard to maintain
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="icon-check1" /> SOPs change faster
                          than courses
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p>
                          <span className="icon-check1" /> Static formats do
                          not train decisions
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="icon-check1" /> Short modules are
                          easier to localize
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-one__content-bottom">
                <div className="btn-box">
                  <a className="thm-btn" href="#result">
                    See Example Module
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

          <div className="col-xl-6">
            <div
              className="about-one__img"
              style={{ maxWidth: "none", width: "100%" }}
            >
              <div className="shape1 float-bob-y">
                <img src="/landing/about-v1-shape1.png" alt="" />
              </div>
              <div className="shape2 float-bob-y">
                <img src="/landing/about-v1-shape2.png" alt="" />
              </div>
              <div
                className="about-one__img1"
                style={{ maxWidth: "820px", width: "100%" }}
              >
                <FadeImageSlider slides={slides} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
