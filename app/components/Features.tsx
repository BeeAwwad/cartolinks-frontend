import Image from "next/image";
import React from "react";

const featureList = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    imgSrc: "/image.svg",
    isNew: true,
    gradient: "linear-gradient(0deg, #D0E3F1 0%, #294962 100%)",
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Luma,and more.",
    imgSrc: "/video.svg",
    isNew: false,
    gradient: "linear-gradient(0deg, #faaa00 0%, #faaa00 100%)",
  },
  {
    id: 3,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    imgSrc: "/realtime.svg",
    isNew: false,
    gradient:
      "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)",
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k.",
    imgSrc: "/enhancer.svg",
    isNew: true,
    gradient: "linear-gradient(0deg, #888888 0%, #000000 100%)",
  },
  {
    id: 5,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    imgSrc: "/edit.svg",
    isNew: true,
    gradient: "linear-gradient(0deg, #AE91CA 0%, #592A85 60%, #180728 100%)",
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    imgSrc: "/video-lypsync.svg",
    isNew: true,
    gradient: "linear-gradient(0deg, #BBCA91 0%, #3C878F 60%, #07280F 100%)",
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    imgSrc: "/motion-transfer.svg",
    isNew: true,
    gradient: "linear-gradient(0deg, #2f2f2f 0%, #2f2f2f 100%)",
  },
  {
    id: 8,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    imgSrc: "/video-restyle.svg",
    isNew: false,
    gradient: "linear-gradient(0deg, #DC143C 0%, #DC143C 100%)",
  },
];
const Features = () => {
  return (
    <section className="px-10">
      <h2 className="text-2xl font-bold mb-8">Generate</h2>
      <div
        className="
      grid gap-8
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      "
      >
        {featureList.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col sm:flex-row justify-between hover:bg-slate-100 transition-colors rounded-2xl items-center px-6 py-3"
          >
            <div className="flex flex-col sm:flex-row items-center flex-1 gap-4">
              <div
                className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0"
                style={{
                  background: feature.gradient,
                  width: "42px",
                  height: "42px",
                }}
              >
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="absolute inset-0  right-[1px] m-auto"
                />
              </div>
              <div className="flex flex-col items-center space-y-2 sm:items-start mb-2">
                <div className="flex items-center">
                  <h3 className="text-sm font-semibold mr-2">
                    {feature.title}
                  </h3>
                  {feature.isNew && (
                    <span className="bg-blue-600 text-white w-fit h-fit text-xs font-medium px-2 py-0.5 rounded-xl">
                      New
                    </span>
                  )}
                </div>
                <p className="text-gray-600 flex-1 text-center sm:text-start text-sm mr-4">
                  {feature.description}
                </p>
              </div>
            </div>

            <button className="bg-slate-100 text-xs text-black px-4 py-2 rounded-3xl hover:bg-slate-200 font-medium">
              Open
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
