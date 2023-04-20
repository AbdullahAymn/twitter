import React, { useContext } from "react";
import Side from "../components/SideBar/sidebar";
import Explore from "../components/Explore/Explore";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Link from "next/link";
import { data } from "../utils/Store";
import Profilecom from "../components/profile";
import ProfileTweets from "../components/profileTweets";

function Profile() {
  const loggedIn = useSelector((state) => state.loggedin);
  const user = useContext(data).userName;

  



  return (
    <>
      <main className="grid grid-cols-11 md:grid-cols-9 max-w-7xl mx-auto">
        <div className=" col-span-2">
          <Side />
        </div>

        <div className="col-span-9 border-x h-screen overflow-y-scroll md:col-span-7 lg:col-span-5">
          <div className=" p-3 font-sans font-bold text-xl bg-white/50 border-b w-full">
            {user ? user : 'Profile'}
          </div>
          {!loggedIn ? (
            <div className="flex items-center justify-between h-96">
              <div className="text-lg w-fit p-10 shadow-xl mx-auto text-center rounded-xl">
                <p>you aren't loged in </p>
                <Link href="/login?redirect=/profile">
                  <p className="px-4 py-2 mt-2 rounded-full bg-twitter/70 text-gray-100">
                    Log in
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Profilecom />
              <ProfileTweets />
            </>
          )}
        </div>
        <div className=" col-span-2 hidden lg:inline">
          <Explore />
        </div>
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
