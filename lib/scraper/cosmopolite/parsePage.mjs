import { fetchPage } from './fetchPage.mjs';
import { parseHtml } from './parseHtml.mjs';

export const parsePage = async (page) => {
  const response = await fetchPage(page);

  const json = await response.json();
  const html = json[1].data;

  const shows = parseHtml(html);

  return shows;
};
