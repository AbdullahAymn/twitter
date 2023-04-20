import { client } from "../../sanity";
import { groq } from "next-sanity";

// const comment = groq`
// *[_type=='Comment' && references(*[_type == 'Tweet' && _id==$tweetId]._id)]
// {
//   _id,
//     ...
// } | order(_createdAt desc)
  
// `;
const comment = groq`
*[_type=='Comment' && references(*[_type == 'Tweety' && _id==$tweetId]._id)]
{
  _id,
    ...
} 

  
`;
export default async function handeler(req, res) {
  const { tweetId } = req.query;
  const tweetscomment = await client.fetch(comment, { tweetId });
  //console.log(tweetscomment);
  res.status(200).json({ tweetscomment });
}
