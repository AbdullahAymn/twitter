import React, { createContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
const fetchTweets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);
  //const res = await fetch(`https://la1nnehi.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'Tweet'%5D%0A%7B%0A%20%20_id%2C%0A%20%20%20%20...%0A%7D%0A`)

  const data = res.json();
  const tweets = data;

  return tweets;
};

export const data = createContext(null);

export default function StoreProvider(props) {
  const [tweet, setTweet] = useState([]);
  const [refresh, setRefreh] = useState(false);
  const [userName, setUserName] = useState("");

  const loggedIn = useSelector((state) => state.loggedin);

  useEffect(() => {
    // Get tweets
    const res = fetch(`/api/getTweets`)
      .then((result) => result.json())
      .then((data) => setTweet(data.tweets));

    //Get user name
    if (loggedIn) {
      const token = Cookies.get("token");
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDpzYNXJoqkHySt4y8y5G5jAgi36lB63Wg",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => setUserName(data.users[0].displayName));
    }
    
  }, [refresh, loggedIn]);

  return (
    <div>
      <data.Provider value={{ tweet, refresh, setRefreh, userName }}>
        {props.children}
      </data.Provider>
    </div>
  );
}
