import { Button } from "@/components/ui/button";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className=" max-w-screen-sm mx-auto flex items-center justify-evenly h-full">
        {" "}
        <Button variant="ghost" className="w-full" size="lg">
          <Image src="/images/logo.png" alt="" width={40} height={32} />
          简介
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image src="/images/logo.png" alt="" width={40} height={32} />
          地域
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image src="/images/logo.png" alt="" width={40} height={32} />
          展览
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image src="/images/logo.png" alt="" width={40} height={32} />
          历史
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image src="/images/logo.png" alt="" width={40} height={32} />
          表演
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
