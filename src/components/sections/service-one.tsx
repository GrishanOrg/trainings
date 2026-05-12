"use client";

/* eslint-disable @next/next/no-img-element */

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const services = [
  {
    title: "Retail Checkout Training",
    description:
      "Interactive training for store teams: POS controls, product handling, and confident decisions at the checkout.",
    image: "/img/retail.png",
    icon: "icon-delivery-man",
    cta: "See How It Works",
    href: "#problem",
  },
  {
    title: "Commercial Kitchen Training",
    description:
      "Practical modules for kitchen staff: food safety, allergen handling, hygiene rules, and equipment procedures.",
    image: "/img/kitchen.png",
    icon: "icon-shipment",
    cta: "See LMS Fit",
    href: "#lms",
  },
  {
    title: "Field Service Training",
    description:
      "Scenario-based training for technicians: PPE, service procedures, equipment checks, and safe actions on site.",
    image: "/img/fieldservice.png",
    icon: "icon-international-shipping",
    cta: "Book Demo",
    href: "#multilingual",
  },
  {
    title: "Production Line Training",
    description:
      "Operational training for manufacturing teams: machine restart checks, line procedures, guard verification, and escalation.",
    image: "/img/industrial.png",
    icon: "icon-delivery-man",
    cta: "Start With A Pilot",
    href: "#result",
  },
];

export function ServiceOne() {
  return (
    <section className="service-one" id="examples">
      <div
        className="service-one__pattern"
        style={{ backgroundImage: "url(/landing/service-v1-pattern.jpg)" }}
      />
      <div className="container">
        <div className="sec-title center text-center tg-heading-subheading animation-style2">
          <h2 className="sec-title__title tg-element-title">
            What We Turn Into
            <br /> Interactive <span>Training</span>
          </h2>
        </div>

        <div className="row">
          <div className="service-one__carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".service-one .swiper-button-next",
                prevEl: ".service-one .swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="owl-theme owl-dot-style1"
            >
              {services.map((service) => (
                <SwiperSlide key={service.title}>
                  <div className="service-one__single">
                    <div className="service-one__single-inner">
                      <div className="service-one__single-img">
                        <img src={service.image} alt={service.title} />
                      </div>

                      <div className="service-one__single-content">
                        <h2>
                          <a href={service.href}>{service.title}</a>
                        </h2>
                        <p>{service.description}</p>
                        <div className="btn-box">
                          <a href={service.href}>
                            {service.cta}{" "}
                            <span className="icon-right-arrow21"></span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="icon">
                      <span className={service.icon}></span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
