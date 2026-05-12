/* eslint-disable @next/next/no-img-element */

export function Hero() {
  return (
    <section className="banner-one banner-one--static" id="home">
      <div
        className="banner-one__pattern"
        style={{ backgroundImage: "url('/landing/pattern-grid.png')" }}
      />
      <div className="banner-one__pattern2">
        <img src="/landing/banner-v1-pattern2.png" alt="" />
      </div>
      <div className="shape1 rotate-me">
        <img src="/landing/banner-v1-shape1.png" alt="" />
      </div>

      <div className="container">
        <div className="banner-one__content">
          <div className="banner-one__content-left">
            <h2>
              Turn Existing Training <br />
              Into <span>Interactive Modules</span>
            </h2>
            <p>
              Safety and compliance training <br /> for multilingual frontline teams
            </p>
          </div>

          <div className="banner-one__content-right">
            <div className="banner-one__content-right-text">
              <p>
                We turn SOPs, PDFs, slide decks and videos <br />
                into short SCORM-ready modules that fit your existing LMS.
              </p>
            </div>

            <div className="banner-one__content-right-btn">
              <a className="thm-btn" href="#result">
                Start With A Pilot
                <span className="hover-btn hover-bx" />
                <span className="hover-btn hover-bx2" />
                <span className="hover-btn hover-bx3" />
                <span className="hover-btn hover-bx4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
