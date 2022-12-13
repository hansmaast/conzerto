import ora from "ora";
import * as fetchers from "./index.mjs";

export const fetchAllShows = async () => {
  ora().start("Fetching all shows");
  const time = new Date().toLocaleTimeString();

  const cosmopoliteShows = await fetchers.fetchCosmopoliteShows();
  const blaaShows = await fetchers.fetchBlaaShows();
  const rockefellerShows = await fetchers.fetchRockefellerShows();
  const parkteateretShows = await fetchers.fetchParkteateretShows();

  const allShows = [
    ...cosmopoliteShows,
    ...blaaShows,
    ...rockefellerShows,
    ...parkteateretShows,
  ].sort((a, b) => a.date - b.date);

  ora().succeed(`Fetched all shows at ${time}`);

  return allShows;
};
