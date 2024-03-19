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
      <div className="relative h-[100vh] w-full flex items-center justify-center">
        <div className="relative h-full w-[30vw]">
          <Carousel className="relative w-full h-full bg-black flex items-center justify-center p-6">
            <CarouselContent className="w-full h-full bg-black">
              {boardArray.map((n, index) => (
                <CarouselItem className="w-full h-full" key={index}>
                  <Card>
                    <CardContent className="h-full flex items-center justify-center p-6 w-full">
                      <Image
                        src={n.src}
                        className="h-full w-full"
                        alt=""
                        width={1000}
                        height={5000}
                      />
                    </CardContent>
                  </Card>
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
