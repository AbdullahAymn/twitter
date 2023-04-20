import { client } from "../../sanity";
import { groq } from "next-sanity";

const feed = groq`
*[_type=='Tweety']{
    _id,
      ...
  }
  
`;
export default async function handeler(req, res) {
  const tweets = await client.fetch(feed);
  //console.log(tweets);
  res.status(200).json({ tweets });
}
