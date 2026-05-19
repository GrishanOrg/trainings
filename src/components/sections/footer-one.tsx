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
      <div className="footer-one__top">
        <div className="container">
          <div className="footer-one__top-inner">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__about">
                  <div className="footer-one__about-logo">
                    <a href="#home">
                      <img src="/img/logo_700.png" alt="Interactive Trainings logo" />
                    </a>
                  </div>
                  <p className="footer-one__about-text">
                    Interactive Trainings converts SOPs, PDFs, slide decks and
                    videos into short interactive safety and compliance modules
                    for multilingual frontline teams.
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__quick-links">
                  <div className="title">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="footer-one__quick-links-list">
                    {quickLinks.map((link) => (
                      <li key={link.id}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__quick-links">
                  <div className="title">
                    <h3>Built For</h3>
                  </div>
                  <ul className="footer-one__quick-links-list">
                    {builtFor.map((item) => (
                      <li key={item.id}>
                        <a href="#problem">{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__single footer-one__subscribe">
                  <div className="title">
                    <h3>Pilot Offer</h3>
                  </div>
                  <p className="footer-one__subscribe-text">
                    One short multilingual SCORM-ready module built from your
                    existing materials.
                  </p>
                  <div className="footer-one__subscribe-form">
                    <a className="thm-btn" href="#result">Get Started</a>
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
                © 2026 Interactive Trainings. Interactive safety and compliance
                training for frontline teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
