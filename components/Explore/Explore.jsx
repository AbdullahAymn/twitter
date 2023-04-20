import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Explore() {
  return (
      <div className="p-4 w-full">
          {/* Search */}
      <div className="flex bg-gray-100 rounded-full p-2 mb-3  ">
        <div className="p-2">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-700 cursor-pointer " />
        </div>
        <input
          className="bg-gray-100 p-2 outline-none w-full text-gray-700"
          type="text"
          placeholder="search"
        ></input>
          </div>
          {/* News */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 400 }}
      />
    </div>
  );
}
