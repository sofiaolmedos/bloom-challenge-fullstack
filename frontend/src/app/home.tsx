import Image from "next/image";
import { BrandSelector } from "../components/BrandSelector";

export const Home = () => {
  return (
    <div className="flex h-full w-full flex-col p-8">
      <Image
        className="h-14 w-auto self-end"
        src="/images/Logo-Bloom.png"
        alt="Logo"
        width={400}
        height={100}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl mb-8">Desafío Dev</h1>
        <BrandSelector />
      </div>
    </div>
  );
};
