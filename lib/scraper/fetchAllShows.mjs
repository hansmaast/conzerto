import * as fetchers from "./index.mjs";

export const fetchAllShows = async () => {
  console.log("Fetching all shows");
  const time = new Date().toLocaleTimeString();

  const cosmopoliteShows = await fetchers.fetchCosmopoliteShows();
  const blaaShows = await fetchers.fetchBlaaShows();
  const rockefellerShows = await fetchers.fetchRockefellerShows();
  const parkteateretShows = await fetchers.fetchParkteateretShows();

  console.log(`Fetched all shows at ${time}`);

  return [
    ...cosmopoliteShows,
    ...blaaShows,
    ...rockefellerShows,
    ...parkteateretShows,
  ];
};
