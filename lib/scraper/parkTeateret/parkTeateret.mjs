import { fetchShows } from './fetchShows.mjs';

const url = 'https://www.parkteatret.no';

export async function fetchParkteateretShows(limit) {
  let shows = [];

  try {
    await fetchShows(url, shows);
    if (limit) {
      shows = shows.slice(0, limit);
    }

    // await fetchDetails(shows);
  } catch (error) {
    throw Error(`Error while fetching shows from ${url}`, error);
  }

  return shows;
}
