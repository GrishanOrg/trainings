"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type FadeImageSliderProps = {
  slides: Slide[];
  intervalMs?: number;
};

export function FadeImageSlider({
  slides,
  intervalMs = 4500,
}: FadeImageSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const showPrevious = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, intervalMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeSlide, intervalMs, slides.length]);

  return (
    <div className="about-one__slider">
      <div className="about-one__slider-view">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`about-one__slide${index === activeSlide ? " about-one__slide--active" : ""}`}
          >
            <img src={slide.src} alt={slide.alt} style={{ width: "100%", display: "block" }} />
          </div>
        ))}
      </div>

      <div className="about-one__slider-controls">
        <button
          type="button"
          className="about-one__slider-control about-one__slider-control--prev"
          aria-label="Previous slide"
          onClick={showPrevious}
        >
          <span className="icon-right-arrow21 about-one__slider-icon about-one__slider-icon--prev" />
        </button>
        <button
          type="button"
          className="about-one__slider-control about-one__slider-control--next"
          aria-label="Next slide"
          onClick={showNext}
        >
          <span className="icon-right-arrow21 about-one__slider-icon" />
        </button>
      </div>
    </div>
  );
}
