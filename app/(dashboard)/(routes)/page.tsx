/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import boardArray from "@/app/constants";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row  items-center justify-center p-4 gap-2 ">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold  max-w-[480px]">
          皮影戏（Shadow
          Puppets），又称“影子戏”或“灯影戏”，是一种以兽皮或纸板做成的人物剪影以表演故事的民间戏剧。表演时，艺人们在白色幕布后面，一边操纵影人，一边用当地流行的曲调讲述故事，同时配以打击乐器和弦乐，有浓厚的乡土气息。其流行范围极为广泛，并因各地所演的声腔不同而形成多种多样的皮影戏。
          皮影戏是中国民间古老的传统艺术，老北京人都叫它“驴皮影”。据史书记载，皮影戏始于西汉，兴于唐朝，盛于清代，元代时期传至西亚和欧洲，可谓历史悠久，源远流长。
        </h1>
        <Button size="lg" className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}
