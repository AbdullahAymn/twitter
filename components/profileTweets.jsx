import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Tweet from "./feed/Tweets/Tweet";
import { data } from "../utils/Store";

export default function ProfileTweets() {
  const id = Cookies.get("id");
  const [tweets, setTweets] = useState([]);
  const refrfesh = useContext(data).refresh;

  useEffect(() => {
    fetch(`/api/getTweetsForProfile?id=${id}`)
      .then((res) => res.json())
      .then((data) => setTweets(data.tweets));
  }, [refrfesh]);

  const tweetsShow = tweets.map((e) => <Tweet key={e._id} tweet={e} />);
  return (
    <>
      {tweets.length === 0 ? (
        <div className="text-lg p-6 text-center font-bold text-gray-600/70">You didn't tweet yet</div>
      ) : (
        <div>{tweetsShow}</div>
      )}
    </>
  );
}
