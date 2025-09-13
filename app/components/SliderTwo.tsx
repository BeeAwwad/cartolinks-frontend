"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const images = [
  "/ai-two.jpg",
  "/ai-three.jpg",
  "/ai-four.jpg",
  "/ai-one.jpg",
  "/ai-two.jpg",
];

const SliderTwo = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-w-xs max-w-sm md:min-w-[65vw] md:max-w-[70vw] md:pr-10">
      {/* Slides */}
      <div className="relative">
        <div className="overflow-hidden relative rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1200}
                  height={600}
                  placeholder="blur"
                  unoptimized={true}
                  blurDataURL="/placeholder.jpg"
                  className="w-full h-64 md:h-96 2xl:h-[30rem] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrow buttons below */}
        <div className="absolute -bottom-12 md:-bottom-10 left-1/2 md:left-[30%] -translate-x-1/2 flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition"
          >
            <Icon icon="mingcute:left-line" className="size-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition"
          >
            <Icon icon="mingcute:right-line" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
