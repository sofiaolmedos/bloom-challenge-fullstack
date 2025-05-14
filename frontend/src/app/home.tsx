import Image from "next/image";

export const Home = () => (
  <div className="flex h-full w-full flex-col p-8">
    <Image
      className="h-14 w-auto self-end"
      src="/images/Logo-Bloom.png"
      alt="Logo"
      width={400}
      height={100}
    />
    <div>
      <h1 className="text-center text-4xl">Desafío Dev</h1>
    </div>
  </div>
);
