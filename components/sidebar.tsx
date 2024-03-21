import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-">
          <Image src="/images/logo.png" height={40} width={40} alt="" />
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="learn" href="/learn" iconSrc="/images/logo.png" />
        <SidebarItem label="learn" href="/learn" iconSrc="/images/logo.png" />
        <SidebarItem label="learn" href="/learn" iconSrc="/images/logo.png" />
        <SidebarItem label="learn" href="/learn" iconSrc="/images/logo.png" />
      </div>
    </div>
  );
};

export default Sidebar;
