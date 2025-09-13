"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
];

const SliderOne = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-xs max-w-sm md:min-w-[65vw] md:max-w-[70vw]">
      {/* Carousel frame with rounded corners */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden">
          {/* Slides */}
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
                  blurDataURL="/placeholder.jpg"
                  className="w-full h-64 md:h-96 2xl:h-[30rem] object-cover"
                />
              </div>
            ))}
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
