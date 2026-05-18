/* eslint-disable @next/next/no-img-element */

const brands = [
  { id: 1, src: "/img/lms/360learning.jpeg", alt: "360Learning" },
  { id: 2, src: "/img/lms/absorb.png", alt: "Absorb LMS" },
  { id: 3, src: "/img/lms/cornerstone.png", alt: "Cornerstone" },
  { id: 4, src: "/img/lms/docebo.jpeg", alt: "Docebo" },
  { id: 5, src: "/img/lms/moodle.png", alt: "Moodle" },
  { id: 6, src: "/img/lms/sap_success_factor.png", alt: "SAP SuccessFactors" },
  { id: 7, src: "/img/lms/litmos.avif", alt: "Litmos" },
  { id: 8, src: "/img/lms/talent.png", alt: "TalentLMS" },
];

export function BrandOne() {
  return (
    <section className="brand-one" id="lms">
      <div className="container">
        <div className="brand-one__heading">
          <div className="sec-title tg-heading-subheading animation-style2">
            <h2 className="sec-title__title tg-element-title">
              Works With Popular <span>LMS Setups</span>
            </h2>
            <p className="brand-one__heading-text">
              SCORM-ready modules that fit existing LMS workflows without a replacement project.
            </p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {brands.map((brand) => (
            <div key={brand.id} className="col-6 col-md-4 col-xl-3">
              <div className="brand-one__single">
                <div className="brand-one__single-inner">
                  <div className="brand-one__logo">
                    <img src={brand.src} alt={brand.alt} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
