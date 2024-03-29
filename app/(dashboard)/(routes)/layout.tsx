"use client";
import Image from "next/image";
import React from "react";
import png from "@/images/11.png";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[70vh]">
        <div className="w-full h-[23.8%] bg-[#917548]"></div>
        <div className="h-[76.2%] w-full">
          <div className="relative h-full w-full bg-slate-300">
            <Image
              src={"/images/13.png"}
              alt="11"
              priority
              fill
              className="items-center"
            ></Image>
          </div>
        </div>
      </div>

      <div className="bg-red-200">{children}</div>
    </div>
  );
}
