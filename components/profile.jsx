import React, { useContext } from "react";
import { data } from "../utils/Store";

export default function Profilecom() {
  const userName = useContext(data).userName
  return (
    <div className="border-b">
      <div className=" relative h-48 lg:h-64">
        <img
          alt="cover image"
          className="w-full max-h-36 lg:max-h-48 max-h-38 object-cover absolute top-0 left-0"
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png"
        />
        <img
          className=" h-20 w-20 lg:h-32 lg:w-32  absolute bottom-2 lg:bottom-0 left-10 rounded-full"
          alt="profile image"
          src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg"
        />
      </div>
      <div className="p-6">
        <h1 className="text-xl font-sans font-bold">{userName}</h1>
        <h3 className=" text-md font-sans font-normal text-gray-700/80">@{userName}</h3>
        <p className="py-4 text-gray-700">This just a simple Bio</p>
        <div className=" flex space-x-8">
          <div className="flex items-center justify-between space-x-2  ">
            <h1 className=" font-bold text-lg">0</h1>
            <h2 className=" text-gray-700">Followers</h2>
          </div>
          <div className="flex items-center justify-between space-x-2  ">
            <h1 className=" font-bold text-lg">0</h1>
            <h2 className=" text-gray-700"> Following</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
