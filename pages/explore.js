import Side from "../components/SideBar/sidebar";
import dynamic from "next/dynamic";
import Explore from '../components/Explore/Explore'


function Exploreee() {
  return (
    <>
      <main className="grid grid-cols-11 md:grid-cols-9 max-w-7xl mx-auto">
        <div className=" col-span-2">
          <Side />
        </div>
        <div className="col-span-9 w-full border-l flex items-center h-screen md:col-span-7 ">
          <Explore />
        </div>
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(Exploreee), { ssr: false });
