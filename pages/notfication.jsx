import React, { useContext } from "react";
import Side from "../components/SideBar/sidebar";
import Explore from "../components/Explore/Explore";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Link from "next/link";
import { data } from "../utils/Store";

function Notification() {
  const loggedIn = useSelector((state) => state.loggedin);
  const user = useContext(data).userName;

  //Notification

  const notfications = [
    {
      icon: "fa-brands fa-twitter",
      name: "Twitter",
      text: "Welcomt to twitter",
    },
  ];

  const notShow = notfications.map((e, index) => {
    return (
      <div key={index} className=" flex items-center">
        <div>
          <i
            className={`cursor-pointer text-twitter text-lg md:text-3xl px-4 py-2 ${e.icon} `}
          ></i>
        </div>
        <div className="py-2 cursor-pointer">
          <h1 className=" text-md md:text-xl font-sans font-bold">{e.name}</h1>
          <h3 className=" text-gray-800 text-sm md:text-lg  ">{e.text} </h3>
        </div>
      </div>
    );
  });

  return (
    <>
      <main className="grid grid-cols-11 md:grid-cols-9 max-w-7xl mx-auto">
        <div className=" col-span-2">
          <Side />
        </div>

        <div className="col-span-9 border-x h-screen overflow-hidden md:col-span-7 lg:col-span-5">
          <div className=" p-5 font-sans font-bold text-xl bg-white/50 border-b w-full h-28 shadow-md">
            Notifications
          </div>
          {!loggedIn ? (
            <div className="flex items-center justify-between h-96">
              <div className="text-lg w-fit p-10 shadow-xl mx-auto text-center rounded-xl">
                <p>you aren't loged in </p>
                <Link href="/login?redirect=/notfication">
                  <p className="px-4 py-2 mt-2 rounded-full bg-twitter/70 text-gray-100">
                    Log in
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="cursor-pointer p-1 border-b hover:bg-gray-200/50 transition-all ease-in-out duration-100">
              {notShow}
            </div>
          )}
        </div>
        <div className=" col-span-2 hidden lg:inline">
          <Explore />
        </div>
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(Notification), { ssr: false });
