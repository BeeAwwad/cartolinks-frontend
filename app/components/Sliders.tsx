"use client";

import { useRef } from "react";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sliders = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sliderRef.current) return;

      if (window.innerWidth < 768) return;

      const innerContainer = sliderRef.current.querySelector(
        ".inner-container"
      ) as HTMLDivElement;
      const ctx = gsap.context(() => {
        const totalWidth = innerContainer.scrollWidth;
        const viewportWidth = sliderRef.current!.offsetWidth;
        const scrollDistance = totalWidth - viewportWidth;
        if (scrollDistance <= 0) return;

        gsap.to(innerContainer, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: sliderRef }
  );
  return (
    <section
      ref={sliderRef}
      className="relative w-full h-screen overflow-x-hidden md:overflow-hidden"
    >
      <div className="inner-container flex flex-col items-center md:items-start md:flex-row gap-10 px-10 h-full mt-20 md:mt-28">
        <SliderOne />
        <SliderTwo />
      </div>
    </section>
  );
};

export default Sliders;
