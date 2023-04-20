import React from "react";
import { client } from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";

export default function CommentOfTweet(props) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const comment = props.comment;
  return (
    <div className="w-full p-4  mt-2">
      <div className="flex items-start space-x-4 mb-3 relative">
        <hr className=" absolute to left-7 h-20 border-x border-gray-600" />
        <img
          className="h-7 w-7 rounded-full "
          src={comment.profileImg}
        />
        <div className="flex flex-row items-center space-x-2">
          <h1 className="text-xs text-gray-500 md:text-lg">
            {comment.userName}
          </h1>
          <h4 className=" text-gray-400 text-xs">@{comment.userName} </h4>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {comment.comment && (
          <h1 className="text-lg text-gray-600 font-sans px-12 mb-3">{comment.comment}</h1>
        )}
      </div>
    </div>
  );
}
