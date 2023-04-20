import React, { useContext } from "react";
import Side from '../components/SideBar/sidebar'
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Link from "next/link";
import { data } from '../utils/Store';
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";

function Message() {
  const loggedIn = useSelector((state) => state.loggedin);
  const user = useContext(data).userName
  
  
  return (
    <>
      <main className="grid grid-cols-11 md:grid-cols-9 max-w-7xl mx-auto">
        <div className=" col-span-2">
          <Side />
        </div>
        <div className="col-span-9 w-full border-l flex items-center h-screen md:col-span-7 ">
          {!loggedIn ?
            <div className="text-lg p-10 shadow-xl mx-auto text-center rounded-xl">
            <p>you aren't loged in </p>
            <Link href='/login?redirect=/messages'><p className="px-4 py-2 mt-2 rounded-full bg-twitter/70 text-gray-100">Log in</p></Link>
          </div>

            :
            <div className="text-lg p-10 shadow-xl mx-auto text-center rounded-xl">
              <EnvelopeOpenIcon className="text-twitter/70 text-2xl h-20 w-20 text-center mx-auto my-2"/>
              <p>you don't have any messages , <span className=" font-sans font-bold">{user }</span></p>
              <Link href='/'><p className="px-4 py-2 mt-2 rounded-full bg-twitter/70 text-gray-100">Go to Home</p></Link>
            </div>

          }
        </div>
        
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(Message), { ssr: false });
