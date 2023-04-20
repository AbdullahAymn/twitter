import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { PhotoIcon, GifIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { data } from "../../utils/Store";
import { toast } from "react-toastify";

export default function TweetBox() {
  const isIn = useSelector((state) => state.loggedin);
  const [tweet, setTweet] = useState("");
  const [openImage, setOpenImage] = useState(false);
  const [imagetext, setImageText] = useState("");
  const [image, setImage] = useState();

  //send tweet

  const user = useContext(data).userName;
  const refre = useContext(data);

  const postTweet = async () => {
    const tweetBody = {
      text: tweet,
      id: Cookies.get("id"),
      name: user,
      proImage:
        "https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg",
      image: image,
    };
    
    const result =
      await fetch(`/api/addTweet`, {
        body: JSON.stringify(tweetBody),
        method: "POST",
      });
      const json = await result.json();
    
    

    

    await refre.setRefreh(!refre.refresh);

    toast("tweet added 🚀");

    setImage();
    setImageText();
    setTweet("");
    setOpenImage(false);

    //return json;

    
  };

  const submitHandeller = (event) => {
    event.preventDefault();

     postTweet();
  };

  const AddHandeller = (event) => {
    event.preventDefault();
    setImage(imagetext);
    setOpenImage(false);
  };
  return (
    <div className="w-full p-2 flex items-start ">
      <img
        src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg"
        className="h-11 w-11 rounded-full "
        alt="profile image"
      />
      <form onSubmit={submitHandeller} className="w-full">
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          type="textbox"
          placeholder="what's happening?"
          className="w-full h-28 max-h-28 outline-none p-3 border-b text-xl transition-all ease-in-out duration-300 focus:border-twitter"
        ></textarea>
        <div className=" border-b">
          <div className="w-full flex items-center justify-between py-2">
            <div className="flex space-x-1 ">
              <PhotoIcon
                onClick={() => setOpenImage(!openImage)}
                className="h-6 w-6 text-twitter cursor-pointer"
              />
              <GifIcon className="h-6 w-6 text-twitter cursor-pointer" />
              <FaceSmileIcon className="h-6 w-6 text-twitter cursor-pointer" />
            </div>
            <div>
              <button
                disabled={!tweet || !isIn}
                className="bg-twitter px-4 py-2 rounded-full text-white text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Tweet
              </button>
            </div>
          </div>
          <div>
            {openImage && (
              <form className="w-full flex flex-row p-2">
                <input
                  value={imagetext}
                  onChange={(e) => setImageText(e.target.value)}
                  className="w-full border-b outline-none focus:border-twitter transition-all duration-300"
                  type="text"
                  placeholder="Image url"
                />
                <button
                  disabled={!imagetext}
                  onClick={AddHandeller}
                  className="bg-twitter py-2 px-4 ml-2 text-sm md:text-lg md:ml-4 rounded-full opacity-80 text-white disabled:opacity-50"
                >
                  Add
                </button>
              </form>
            )}
            {image && (
              <div className="p-4">
                <img
                  className="w-full max-h-60 object-cover"
                  src={image}
                  alt="tweete image"
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
