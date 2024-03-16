import Image from "next/image";
import Navbar from "@/components/Navbar";
import RouteCard from "@/components/RouteCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import boardArray from "@/app/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-[56.25vw] w-full flex items-center justify-center">
        <div className="h-full w-[30vw]">
          <Carousel className="w-full h-full bg-black flex aspect-square items-center justify-center p-6">
            <CarouselContent>
              {boardArray.map((n, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image src={n.src} alt="" width="1000" height="1000" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
