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

          <div className="banner-one__visuals" aria-hidden="true">
            <div className="banner-one__visual banner-one__visual--web">
              <Image
                src="/img/top_banner_example_web.png"
                alt=""
                width={1016}
                height={564}
                priority
              />
            </div>

            <div className="banner-one__visual banner-one__visual--mob">
              <Image
                src="/img/top_banner_example_mob.png"
                alt=""
                width={644}
                height={868}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
