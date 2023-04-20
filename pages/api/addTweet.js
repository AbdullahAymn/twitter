export default async function handeler(req, res) {
  const data = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: "Tweety",
          text: data.text,
          ID: data.id,
          blockTweet: false,
          userName: data.name,
          profileImg: data.proImage,
          image: data.image,
        },
      },
    ],
  };

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  const result = await fetch(apiEndpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });

  const json = await result.json();

  res.status(200).json({ message: "tweet added" });
}
