/* eslint-disable @next/next/no-img-element */

export function AboutTwo() {
  return (
    <section className="about-two" id="multilingual">
      <div className="shape5">
        <img src="/landing/about-v2-shape5.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__img">
              <div className="shape2 float-bob-x">
                <img src="/landing/about-v2-shape2.png" alt="" />
              </div>
              <div className="shape3 float-bob-y">
                <img src="/landing/about-v2-shape3.png" alt="" />
              </div>
              <div className="shape4 float-bob-y">
                <img src="/landing/about-v2-shape4.png" alt="" />
              </div>
              <div className="about-two__img1">
                <div className="inner">
                  <img src="/img/multilang1.png" alt="Training module in one language" />
                </div>
              </div>
              <div className="about-two__img2">
                <img src="/img/multilang2.png" alt="Same training module adapted for another language" />
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <h2 className="sec-title__title tg-element-title">
                  One Training Flow, <br />
                  Multiple <span>Languages</span>
                </h2>
              </div>

              <div className="about-two__content-text1">
                <p>
                  Localize on-screen instructions, questions, answer options
                  and feedback for different languages and regions without
                  rebuilding the full module each time.
                </p>
              </div>

              <div className="about-two__content-text2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p>
                          <span className="icon-check1" /> Same scenario logic
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="icon-check1" /> Localized instructions and feedback
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p>
                          <span className="icon-check1" /> Consistency across sites
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="icon-check1" /> Better fit for frontline teams
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-two__content-bottom" style={{ marginTop: "30px" }}>
                <div className="btn-box">
                  <a className="thm-btn" href="#result">
                    Book Demo
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
      </div>
    </section>
  );
}
