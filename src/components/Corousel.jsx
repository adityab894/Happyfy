import React, { useState } from "react";
import { corouseldata } from "./corouseldata";
import Navbar from "./Navbar";

const Corousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex w-screen justify-center gap-10 px-28 pt-20 items-center">
      <button
        className="bg-[#a5ffc7] p-3 rounded-xl "
        onClick={() => {
          setIndex(index === 0 ? corouseldata.length - 1 : index - 1);
        }}
      >
        Prev
      </button>
      <div className="relative inline">
        <a href={corouseldata[index].img} className=" cursor-pointer">
        <img
          src={corouseldata[index].url}
          alt=""
          className="rounded-3xl shadow-lg w-[1500px] h-[500px] object-cover"
        /></a>
      </div>
      <button
        className="bg-[#a5ffc7] p-3 rounded-xl "
        onClick={() => {
          setIndex((index + 1) % corouseldata.length);
          console.log(index);
          console.log(corouseldata[index].url);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Corousel;
