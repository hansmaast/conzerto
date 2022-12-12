import { createShow } from '../helpers/models.mjs';
import { parsePage } from './parsePage.mjs';

export const parsePages = async () => {
  let pageNumber = 1;
  const shows = [createShow()];
  shows.shift();

  let hasReturnedShows = true;
  while (hasReturnedShows) {
    const showsFromPage = await parsePage(pageNumber);
    hasReturnedShows = showsFromPage.length > 0;
    if (!hasReturnedShows) break;
    shows.push(...showsFromPage);
    pageNumber++;
  }

  return shows;
};
