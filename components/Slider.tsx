"use client";
import React, { useState } from "react";
import Image from "next/image";
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Slider() {
  const [index, setIndex] = useState(1);
  const nextSlide = () => {
    setIndex((index) => (index === Array.length - 1 ? 0 : index + 1));
  };
  return (
    <div className="w-full h-full bg-white">
      {Array.map((n, i) => (
        <div
          className={`transition cursor-pointer w-full h-full bg-black ${
            index === i ? "opacity-100" : "hidden"
          }`}
          key={i}
          onClick={() => {
            nextSlide();
          }}
        >
          <Image
            className="inline"
            src={`/images/${i + 1}.jpg`}
            width={2400}
            height={1200}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
