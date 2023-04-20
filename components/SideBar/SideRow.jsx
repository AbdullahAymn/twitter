import React from "react";

export default function SideRow(props) {
  return (
    <div  className=" p-4 rounded-full hover:bg-gray-100 cursor-pointer mx-auto lg:mx-2 max-w-fit flex justify-between items-center  ">
      <props.Icon className="h-8 w-8 text-center  " />
      <h1 className={`text-xl text-center  hidden md:inline md:text-base md:px-2   ${props.bold && "font-bold"} `}>
        {props.text}
      </h1>
    </div>
  );
}
