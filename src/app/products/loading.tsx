import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-2">
      <Image width={100} height={100} alt="logo" src={`/imgBurger.png`} />
      <p className="font-semibold text-2xl">Instagram</p>
    </div>
  );
};

export default Loading;
