import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-center py-6 items-center w-[100%] relative px-[6vw] bg-white z-10 bg-opacity-70 backdrop-filter backdrop-blur-md sticky top-0 h-[70px]">
      <div className=" text-3xl font-semibold absolute left-[20px]">
        <Link to="/">Happy<span className=" text-[#62fe32]">fy</span></Link>
      </div>
      <ul className=" flex justify-between w-[60%] max-w-[600px] items-center">
        <Link to={"/"}>
            <li>Home</li>
        </Link>
        <Link to={"/meditate"}>
            <li>Meditation</li></Link>
        <Link to={"/mood"}>
            <li>Depression test</li></Link>
        <Link to={"/therapy"}>
            <li>Therapy</li></Link>
        <Link to={"/resource"}>
            <li>Resources</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
