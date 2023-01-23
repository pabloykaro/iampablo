import React, { useState } from "react";

import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

import slideFirst from "../assets/slides/slide-01.jpeg";
import slideSecond from "../assets/slides/slide-02.jpeg";

let imageForSlide = [
  {
    imageName: "slide-01",
    sourceImage: slideFirst,
  },
  {
    imageName: "slide-02",
    sourceImage: slideSecond,
  },
];

export function Slide() {
  const [positionOfSlide, setPositionOfSlide] = useState<number>(0);

  function changeTheSlide(positionText: string) {
    let sizeOfArraySlide = imageForSlide.length - 1;

    if (positionText === "prev") {
      if (positionOfSlide >= sizeOfArraySlide) {
        setPositionOfSlide((state) => state - 1);
      }
    }
    if (positionText === "next") {
      if (positionOfSlide < sizeOfArraySlide) {
        setPositionOfSlide((state) => state + 1);
      }
    }
  }

  return (
    <div className=" flex flex-row justify-evenly items-center flex-1 h-80 bg-black">
      <button
        className="z-40" 
        type="button" 
        onClick={() => changeTheSlide("prev")}>
        <ArrowCircleLeft color="#ffffff" size={42} />
      </button>
      <div className="absolute text-white bg-bgtemplate w-56  md:w-96  bg-black/60 p-2">
        <article className="flex flex-col gap-2">
          <h1 className="md:text-xl text-lg font-bold">Hello friends</h1>
          <p className="md:text-sm text-xs font-regular">
            I'm Pablo Ykaro, I'm 23 years old, I started very early in the world
            of programming, and I fell in love with web, mobile and back-end
            development
          </p>
        </article>
      </div>
      <img
        className="object-contain slide transition-shadow"
        width="50%"
        loading="lazy"
        src={imageForSlide[positionOfSlide].sourceImage}
      />

      <button 
        className="z-40"
        type="button" 
        onClick={() => changeTheSlide("next")}>
        <ArrowCircleRight color="#ffffff" size={42} />
      </button>
    </div>
  );
}
