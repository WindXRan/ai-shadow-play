"use client";
import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Slider from "@/components/Slider";
import Sidebar from "@/components/sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import Helper from "@/components/Helper";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const SearchParams = useSearchParams();
  const search = SearchParams.get("dashboard");
  console.log(search);
  return (
    <div className="flex ">
      {/* <Header /> */}
      <Sidebar className="h-[100vh] hidden lg:block" />
      <div className="w-full flex flex-col">
        <Header />
        <main className=" flex flex-row flex-1 items-center justify-start">
          <Helper pathName="1111" />
          <div className=" w-full h-full bg-[url('/images/11.png')]  bg-no-repeat">
            <div className="bg-black w-full h-full bg-opacity-50">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
