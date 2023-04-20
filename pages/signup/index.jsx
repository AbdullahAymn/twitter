import React from "react";
import Side from '../../components/SideBar/sidebar'
import Signup from "./signup";
import dynamic from "next/dynamic";

function index() {
  return (
    <>
      <main className="grid grid-cols-11 md:grid-cols-9 max-w-7xl mx-auto">
        <div className=" col-span-2">
          <Side />
        </div>
        <div className="col-span-9 w-full border-l flex items-center h-screen md:col-span-7 ">
          <Signup />
        </div>
        
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
