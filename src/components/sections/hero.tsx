import Image from "next/image";

export function Hero() {
  return (
    <section className="banner-one banner-one--static" id="home">
      <div className="container">
        <div className="banner-one__content">
          <h1 className="banner-one__title">
            Turn Existing Training Into Interactive Modules
          </h1>

          <p className="banner-one__text">
            We turn SOPs, PDFs, slide decks and videos into short SCORM-ready
            modules that fit your existing LMS.
          </p>

          <div className="banner-one__actions">
            <a className="thm-btn banner-one__cta" href="#result">
              Get started
            </a>
          </div>

          <div className="banner-one__visual" aria-hidden="true">
            <Image
              src="/img/header2.png"
              alt=""
              width={1600}
              height={900}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
