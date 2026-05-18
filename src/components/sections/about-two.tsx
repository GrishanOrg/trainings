import Image from "next/image";

export function AboutTwo() {
  return (
    <section className="about-two" id="multilingual">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__img">
              <Image
                className="about-two__img-image"
                src="/img/multilang.png"
                alt="Training module localized for a frontline team"
                width={1800}
                height={1128}
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <h2 className="sec-title__title tg-element-title">
                  One Training Flow, <br />
                  <span>Multiple Languages</span>
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
                          <Image
                            className="about-two__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>Same scenario logic</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            className="about-two__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>Localized instructions and feedback</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p>
                          <Image
                            className="about-two__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>Consistency across sites</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            className="about-two__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>Better fit for frontline teams</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-two__content-bottom">
                <div className="btn-box">
                  <a className="thm-btn" href="#result">GetStarted</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
