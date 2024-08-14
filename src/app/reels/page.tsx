import Image from "next/image";
import React from "react";

const ReelsPage = () => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-[24rem] w-[40rem] bg-red-400 grid grid-rows-2 grid-flow-col gap-1 mt-1"
        >
          <div className={`bg-blue-500 ${i % 2 == 1 ? "" : "row-span-2"} `} />
          <div className={"bg-blue-500 "} />
          <div className={"bg-blue-500 "} />
          <div className={"bg-blue-500 "} />
          <div className={`bg-blue-500 ${i % 2 == 1 ? "row-span-2" : ""} `} />
        </div>
      ))}
    </div>
  );
};

export default ReelsPage;

function ExpolreCard() {
  return (
    <>
      <div
        className={` ${
          i % 2 == 1 ? "order-2" : "order-1"
        } object-cover bg-blue-500`}
      ></div>
      <div
        className={`bg-blue-500  ${i % 2 == 1 ? "order-3" : "order-2"} `}
      ></div>
      <div
        className={`bg-blue-500  ${i % 2 == 1 ? "order-4" : "order-3"}`}
      ></div>
      <div
        className={`bg-blue-500  ${i % 2 == 1 ? "order-5" : "order-4"}`}
      ></div>
      <div
        className={`bg-blue-500 row-span-2 ${
          i % 2 == 1 ? "order-1" : "order-5"
        }`}
      ></div>
    </>
  );
}
