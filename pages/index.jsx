import React, { useContext } from "react";
import Side from "../components/SideBar/sidebar";
import Feed from "../components/feed/Feed";
import Explore from "../components/Explore/Explore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import  {fetchTweets}  from "../utils/fetchtweets";
// import { GetServerSideProps, NextPage } from "next";
import { data } from "../utils/Store";

// interface Props {
//   tweets: {
//     name: string,
//     blockTweet: boolean,
//     userName: string,
//     profileImg: string,
//     image : string

//   }[]
// }

// const Index: NextPage = ({ tweets }: Props) => {
const Index = () => {
  const dataget = useContext(data);
  return (
    <div>
      <main className="grid grid-cols-11 md:grid-cols-9 max-w-7xl mx-auto">
        <div className=" col-span-2">
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Side />
        </div>
        <div className="col-span-9 border-x h-screen overflow-hidden md:col-span-7 lg:col-span-5">
          <Feed tweets={dataget.tweet} />
        </div>
        <div className=" col-span-2 hidden lg:inline">
          <Explore />
        </div>
      </main>
    </div>
  );
};

export default Index;

// export const getSeverSideProps: GetServerSideProps = async (context) => {
//   const tweets = await fetchTweets
//   return {
//     props: {
//       tweets,
//     }
//   }
// }
