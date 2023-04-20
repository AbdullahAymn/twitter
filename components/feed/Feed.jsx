import React, { useContext } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import TweetBox from "./TweetBox";
import Tweet from "./Tweets/Tweet";
import { data } from "../../utils/Store";

export default function Feed(props) {
  const tweets = props.tweets.map((e) => <div><Tweet key={e._id} tweet={e} /></div>);
  const ref = useContext(data);
  return (
    <div className="overflow-y-scroll h-screen">
      <div className="flex items-center justify-between py-5 px-10">
        <h1 className="font-bold text-xl font-sans">Home</h1>
        <ArrowPathIcon
          onClick={() => ref.setRefreh(!ref.refresh)}
          className=" cursor-pointer text-xl h-7 w-7 transition-all duration-200 ease-in-out hover:rotate-180 text-twitter"
        />
      </div>
      <TweetBox />
      <div className=" flex-row-reverse">
      {tweets}
      </div>
      
    </div>
  );
}
