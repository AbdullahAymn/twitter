import { client } from "../../sanity";
import { groq } from "next-sanity";

const feed = groq`
*[_type=='Tweety' && ID == $id]
{
  _id,
    ...
} 

  
`;
export default async function handeler(req, res) {
  const {id} = req.query;
  const tweets = await client.fetch(feed, { id });
  console.log(tweets);
  res.status(200).json({ tweets });
}
