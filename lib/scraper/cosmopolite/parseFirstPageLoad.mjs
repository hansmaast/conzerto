import fetch from 'node-fetch';
import { parseHtml } from './parseHtml.mjs';

export const url = 'https://cosmopolite.no/program';

export const parseFirstPageLoad = async () => {
  const response = await fetch(url);
  const html = await response.text();
  const shows = parseHtml(html);
  return shows;
};
