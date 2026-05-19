import Image from "next/image";

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
                <div className="about-one__status">
                  <span className="about-one__status-icon">
                    <Image
                      src="/icon/approve.png"
                      alt=""
                      width={28}
                      height={28}
                    />
                  </span>
                  <div className="about-one__status-copy">
                    <strong>Formal completion</strong>
                  </div>
                </div>

                <div className="about-one__status">
                  <span className="about-one__status-icon">
                    <Image
                      src="/icon/reject.png"
                      alt=""
                      width={28}
                      height={28}
                    />
                  </span>
                  <div className="about-one__status-copy">
                    <strong>Reality: not ready</strong>
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

              <div className="about-one__content-text2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-one__content-list">
                      <li>
                        <p>
                          <Image
                            className="about-one__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />{" "}
                          Outdated content is
                          hard to maintain
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            className="about-one__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />{" "}
                          SOPs change faster
                          than courses
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-one__content-list">
                      <li>
                        <p>
                          <Image
                            className="about-one__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />{" "}
                          Static formats do
                          not train decisions
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            className="about-one__checkmark"
                            src="/icon/checkmark.png"
                            alt=""
                            width={16}
                            height={16}
                          />{" "}
                          Short modules are
                          easier to localize
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-one__content-bottom">
                <div className="btn-box">
                  <a className="thm-btn" href="#example-module">See Example Module</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-one__img">
              <div className="about-one__img1">
                <Image
                  className="about-one__img-image"
                  src="/img/uncertancy.png"
                  alt="Static training example screen"
                  width={1600}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
