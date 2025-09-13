"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/ai-three.jpg",
  "/ai-two.jpg",
  "/ai-five.jpg",
  "/ai-four.jpg",
  "/ai-six.jpg",
  "/ai-two.jpg",
  "/ai-one.jpg",
  "/ai-four.jpg",
  "/ai-three.jpg",
];

const SliderOne = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-xs max-w-sm md:min-w-[65vw] md:max-w-[70vw]">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
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
              Wan 2.2
            </h1>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-3 max-w-md">
              <h2 className="text-lg md:text-2xl font-semibold drop-shadow-md">
                WAN 2.2 Image generation
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

        {/* Bullets */}
        <div className="absolute -bottom-6 md:-bottom-10 left-1/2 md:left-[70%] -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full ${
                current === index ? "bg-slate-800" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
