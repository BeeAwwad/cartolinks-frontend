"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const images = [
  "/ai-six.jpg",
  "/ai-five.jpg",
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

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
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

        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 text-white">
          {/* Top-right small text */}
          <div className="self-start tracking-widest font font-medium text-xs md:text-sm uppercase px-3 py-1 rounded-lg">
            New image model
          </div>

          {/* Middle big heading */}
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-2xl md:text-5xl xl:text-8xl uppercase font-bold text-center drop-shadow-lg">
              Open Source Model
            </h1>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-3 max-w-md">
              <h2 className="text-lg md:text-2xl font-semibold drop-shadow-md">
                FLUX.1 Krea
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                Generate complex images with the brand new and powerful WAN 2.2
                model. Exceptional prompt adherence and ultra realistic
                textures.
              </p>
            </div>

            <div>
              <button className="px-4 py-2 bg-slate-50 hover:bg-slate-200 text-black rounded-3xl text-xs md:text-sm font-medium text-nowrap">
                TRY WAN 2.2
              </button>
            </div>
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
