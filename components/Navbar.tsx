import NavbarItem from "./NavbarItem";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full flex items-center justify-between px-100 md:px-16 py-6 bg-[#853131] z-40">
           {" "}
      <div className="flex items-center flex-grow mx-8 lg:mx-12">
               {" "}
        <div className="flex items-center gap-4 lg:gap-7 flex-grow justify-end ">
                    <NavbarItem label="历史" />
                    <NavbarItem label="功能" />
                    <NavbarItem label="地域" />       {" "}
        </div>
               {" "}
        <div className="flex flex-grow justify-center">
                   {" "}
          <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />     
           {" "}
        </div>
               {" "}
        <div className="flex items-center gap-4 lg:gap-7 flex-grow justify-start">
                    <NavbarItem label="制作" />
                    <NavbarItem label="表演" />
                    <NavbarItem label="展览" />       {" "}
        </div>
             {" "}
      </div>
           {" "}
      <div className="ml-auto">
                <Button variant="ghost">切换</Button>     {" "}
      </div>
         {" "}
    </nav>
  );
};

export default Navbar;
