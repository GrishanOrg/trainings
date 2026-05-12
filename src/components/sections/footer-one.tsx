/* eslint-disable @next/next/no-img-element */

const quickLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Problem & Value", href: "#problem" },
  { id: 3, label: "LMS Compatibility", href: "#lms" },
  { id: 4, label: "Multilingual", href: "#multilingual" },
];

const builtFor = [
  { id: 1, label: "Warehousing" },
  { id: 2, label: "Logistics" },
  { id: 3, label: "Field Service" },
  { id: 4, label: "Manufacturing" },
];

export function FooterOne() {
  return (
    <footer className="footer-one">
      <div className="footer-one__pattern">
        <img src="/landing/footer-v1-pattern.png" alt="" />
      </div>
      <div className="footer-one__top">
        <div className="container">
          <div className="footer-one__top-inner">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__about">
                  <div className="footer-one__about-logo">
                    <a href="#home">
                      <img src="/img/logo_256.png" alt="Interactive Trainings logo" />
                    </a>
                  </div>
                  <p className="footer-one__about-text">
                    Interactive Trainings converts SOPs, PDFs, slide decks and
                    videos into short interactive safety and compliance modules
                    for multilingual frontline teams.
                  </p>
                  <div className="footer-one__about-contact-info">
                    <div className="icon">
                      <span className="icon-support" />
                    </div>
                    <div className="text-box">
                      <p>SCORM-ready delivery</p>
                      <h4>
                        <a href="#lms">Works with existing LMS</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__quick-links">
                  <div className="title">
                    <h2>
                      Quick Links <span className="icon-plane3" />
                    </h2>
                  </div>
                  <ul className="footer-one__quick-links-list" style={{ paddingLeft: 0 }}>
                    {quickLinks.map((link) => (
                      <li key={link.id}>
                        <a href={link.href}>
                          <span className="icon-right-arrow1" /> {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__quick-links">
                  <div className="title">
                    <h2>
                      Built For <span className="icon-plane3" />
                    </h2>
                  </div>
                  <ul className="footer-one__quick-links-list" style={{ paddingLeft: 0 }}>
                    {builtFor.map((item) => (
                      <li key={item.id}>
                        <a href="#problem">
                          <span className="icon-right-arrow1" /> {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__subscribe">
                  <div className="title">
                    <h2>
                      Pilot Offer <span className="icon-plane3" />
                    </h2>
                  </div>
                  <p className="footer-one__subscribe-text">
                    One short multilingual SCORM-ready module built from your
                    existing materials.
                  </p>
                  <div className="footer-one__subscribe-form">
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
      </div>
      <div className="footer-one__bottom">
        <div className="container">
          <div className="footer-one__bottom-inner">
            <div className="footer-one__bottom-text">
              <p>
                © 2026 <a href="#home">Interactive Trainings</a>. Interactive
                safety and compliance training for frontline teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
