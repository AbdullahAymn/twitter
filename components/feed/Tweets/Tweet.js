import React, { useContext, useEffect, useState } from "react";
import CommentOfTweet from "./CommentOfTweet";
import { client } from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ShareIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { data } from "../../../utils/Store";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Tweet(props) {
  const [cliked, setClicked] = useState(false);
  const [openCommet, setOpenCommet] = useState(false);
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  const tweet = props.tweet;

  //Getting comments
  const ctx = useContext(data);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`/api/getComment?tweetId=${tweet._id}`)
      .then((res) => res.json())
      .then((data) => setComments(data.tweetscomment));
  }, [ctx.refresh]);

  const commentsShow = comments.map((commet) => (
    <CommentOfTweet key={commet._id} comment={commet} />
  ));

  //Add comment

  const [commentContent, setCommentContent] = useState();
  const isIn = useSelector((state) => state.loggedin);

  const CommentHandeler = async (event) => {
    event.preventDefault();

    const comment = {
      text: commentContent,
      id: Cookies.get("id"),
      name: ctx.userName,
      proImage:
        "https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg",
      tweetId: tweet._id,
    };

    const result =
      await fetch(`/api/addCommet`, {
        body: JSON.stringify(comment),
        method: "POST",
      });
      const json = await result.json();

    await ctx.setRefreh(!ctx.refresh)
    await setOpenCommet(false)
    await setCommentContent()

    toast('comment added 🚀')
  };

  return (
    <div className="p-3 w-full border-b">
      <div className="flex items-start space-x-4 mb-3">
        <img
          className="h-10 w-10 rounded-full "
          src={
            tweet.profileImg
              ? tweet.profileImg
              : "https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg"
          }
        />
        <div className="flex flex-row items-center space-x-2">
          <h1 className="text-md md:text-xl">{tweet.userName}</h1>
          <h4 className=" text-gray-400 text-xs">@{tweet.userName} </h4>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {tweet.text && (
          <h1 className="text-lg text-gray-700 font-sans mb-3">{tweet.text}</h1>
        )}
        {tweet.image && (
          <img
            className="w-full  rounded-lg max-h-60 object-cover"
            src={tweet.image}
          />
        )}
      </div>
      <div className="flex items-center justify-around pt-3">
        <div
          onClick={() => setOpenCommet(!openCommet)}
          className="flex items-center justify-between"
        >
          <ChatBubbleOvalLeftEllipsisIcon className=" cursor-pointer h-5 w-5 text-gray-700" />
          <p className="text-xs px-1 text-gray-700 ">{comments.length}</p>
        </div>
        <div className="flex items-center justify-between">
          {cliked ? (
            <i
              onClick={() => setClicked(!cliked)}
              className=" fa-solid fa-heart cursor-pointer h-5 w-5 text-pink-700"
            />
          ) : (
            <HeartIcon
              onClick={() => setClicked(!cliked)}
              className=" cursor-pointer h-5 w-5 text-gray-700"
            />
          )}

          <p className="text-xs px-1 text-gray-700 ">3</p>
        </div>
        <div className="flex items-center justify-between">
          <ShareIcon className=" cursor-pointer h-5 w-5 text-gray-700" />
        </div>
      </div>
      <div>
        {openCommet && (
          <div className="w-full">
            {isIn ? (
              <form className="w-full flex p-4" onSubmit={CommentHandeler}>
                <input
                  className="w-full p-2 text-md opacity-70 text-gray-700 outline-none border-b rounded-lg focus:border-twitter transition-all duration-300"
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  type="text"
                  placeholder="Write a comment"
                />
                <button
                  disabled={!commentContent}
                  className="bg-twitter rounded-full py-2 px-4 text-gray-200 text-md ml-2 disabled:opacity-50"
                >
                  Comment
                </button>
              </form>
            ) : (
              <Link href="/login">
                <p className="text-center p-4 text-md underline">
                  Login to comment
                </p>
              </Link>
            )}
          </div>
        )}
        {comments.length > 0 ? (
          <div className=" overflow-y-scroll max-h-28">{commentsShow}</div>
        ) : (
          <p className=" border-t mt-2 text-center p-2 text-xs text-gray-500">
            No comments yet
          </p>
        )}
      </div>
    </div>
  );
}
