import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inActions } from "../../utils/ReStore";
import dynamic from "next/dynamic";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import SideRow from "./SideRow";
import Link from "next/link";
import { useRouter } from "next/router";

function Side() {
  const lggedIn = useSelector((state) => state.loggedin);
  const dispatch = useDispatch();
  const router = useRouter();
  const path = router.pathname;

  const logOut = () => {
    dispatch(inActions.logout());
    router.push("/login");
  };

  return (
    <div className="py-5 px-2 lg:px-8">
      <div className="p-4 rounded-full hover:bg-gray-100 cursor-pointer max-w-fit ">
        <i className="fa-brands fa-twitter text-center text-3xl text-twitter"></i>
      </div>

      <Link href="/">
        <SideRow Icon={HomeIcon} text="Home" bold={path === "/"} />
      </Link>
      <Link href="/profile">
        <SideRow Icon={UserIcon} text="Profile" bold={path === "/profile"} />
      </Link>
      {/* <Link href="/explore">
        <SideRow Icon={HashtagIcon} text="Explore" bold={path === "/explore"} />
      </Link> */}
      <Link href="/notfication">
        <SideRow Icon={BellIcon} text="Notfication" bold={path === "/notfication"} />
      </Link>
      <Link href="/messages">
        <SideRow Icon={EnvelopeIcon} text="Messages" bold={path === "/messages"} />
      </Link>
      <Link href="/saved">
        <SideRow Icon={BookmarkIcon} text="Saved" bold={path === "/saved"} />
      </Link>
      {!lggedIn ? (
        <div>
          <Link href="/login">
            <SideRow Icon={ArrowLeftOnRectangleIcon} text="Log-in" bold={path === "/login"} />
          </Link>
        </div>
      ) : (
        <div onClick={logOut}>
          <SideRow Icon={ArrowRightOnRectangleIcon} text="Log-out" />
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Side), { ssr: false });
