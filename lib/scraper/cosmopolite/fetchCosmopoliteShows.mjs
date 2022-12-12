import { parseFirstPageLoad } from './parseFirstPageLoad.mjs';
import { parsePages } from './parsePages.mjs';

export const fetchCosmopoliteShows = async () => {
  const shows = await parseFirstPageLoad();
  const showsFromPages = await parsePages();
  shows.push(...showsFromPages);
  return shows;
};
