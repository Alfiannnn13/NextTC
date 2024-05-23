import Image from "next/image";

const Campaign = () => {
  return (
    <div className="hidden bg-yellow-50 px-4 sm:flex justify-between h-64">
      <div className="w-2/3 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
        Dive into the World of Cats <br />Discover Each Distinct Breed
        </h1>
      </div>
      <div
        className="
            relative w-1/3"
      >
        <Image src="/kucing.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Campaign;
