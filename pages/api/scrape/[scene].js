// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fetchers from "scraper/fetchers";

export default async function handler(req, res) {
  console.log("Auth: ", req.headers.authorization);

  console.log("process.env.API_KEY: ", process.env.API_KEY);

  if (req.headers.authorization !== process.env.API_KEY) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const scene = req.query.scene;
  let shows = [];

  switch (scene) {
    case "cosmopolite":
      shows = await fetchers.fetchCosmopoliteShows();
      break;
    case "blaa":
      shows = await fetchers.fetchBlaaShows();
      break;
    case "rockefeller":
      shows = await fetchers.fetchAndSortRockefellerShows();
      break;
    case "parkteateret":
      shows = await fetchers.fetchParkteateretShows();
      break;
    case "all":
      shows = await fetchers.fetchAllShows();
      break;
    default:
      res.status(404).json({ error: "Unknown scene" });
  }

  res.status(200).json(shows);
}
