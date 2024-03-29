import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Craft = () => {
  return (
    <div className="flex justify-center items-center">
      {/* image container */}
      <div className="h-[100vh] w-[100vw] flex justify-center bg-no-repeat bg-[url('/images/8.jpg')] bg-center bg-fixed bg-cover">
        <div className="bg-black/180 h-full w-full"></div>
      </div>
      {/* text container */}
      <div className="absolute top-[40vh] flex flex-col items-center justify-center text-white font-bold gap-64 ">
        <h1 className="text-6xl"> Explore the old Shadow Play through art</h1>
        <div className="flex justify-center items-center gap-8">
          <p>START EXPLORING</p>
          <Button className="rounded-full bg-slate-400">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Craft;
