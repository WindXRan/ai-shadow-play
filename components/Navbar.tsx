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
    <nav className="fixed w-full z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row bg-[#853131]">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div
          className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex"
        >
          <NavbarItem label="历史" />
          <NavbarItem label="功能" />
          <NavbarItem label="地域" />
          <NavbarItem label="制作" />
          <NavbarItem label="表演" />
          <NavbarItem label="展览" />
        </div>
        <div className="ml-auto">
          <Button variant="ghost">切换</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
