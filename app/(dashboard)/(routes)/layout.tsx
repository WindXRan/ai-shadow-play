import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Slider from "@/components/Slider";
import Sidebar from "@/components/sidebar";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex">
      {/* <Header /> */}
      <Sidebar className="h-[100vh] hidden lg:block bg-red-200" />
      <div className="w-full flex flex-col">
        <Header />
        <main className="flex flex-row flex-1 items-center justify-start">
          <div className="w-[30%] h-full border-r-4 flex justify-center items-center border-red-200">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
