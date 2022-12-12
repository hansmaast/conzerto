import { fetchRockefellerShows } from './fetchShows.mjs';
import { sortRockefellerShowsByScene } from './utils.mjs';

const url = 'https://www.rockefeller.no';

export async function fetchAndSortRockefellerShows() {
  let shows = await fetchRockefellerShows(url);
  const sortedShows = sortRockefellerShowsByScene(shows);

  return sortedShows;
}
