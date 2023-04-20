import { createContext } from "react"

 export const fetchTweets = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`)
    //const res = await fetch(`https://la1nnehi.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'Tweet'%5D%0A%7B%0A%20%20_id%2C%0A%20%20%20%20...%0A%7D%0A`)

    const data = res.json()
    const tweets = data

    return tweets
}



