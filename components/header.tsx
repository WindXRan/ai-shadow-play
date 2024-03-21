import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 bg-[#b36d61] px-4">
      <Image src="/images/logo.png" alt="" height={50} width={80} />
    </header>
  );
};

export default Header;
