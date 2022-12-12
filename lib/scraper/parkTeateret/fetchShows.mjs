import { load } from 'cheerio';
import { fetchData } from '../helpers/fetchData.mjs';
import { createShow } from '../helpers/models.mjs';
import { parseDateString } from '../helpers/parseDateString.mjs';

export async function fetchShows(url = '', shows = []) {
  try {
    await fetchData(`${url}/program`).then((res) => {
      const html = res;
      const $ = load(html);
      const elementsWithShowInfo = $('.event-card');

      elementsWithShowInfo.each(function () {
        let date = $(this).find('.event-card__meta-column--date').text();
        date = parseDateString(date);

        const title = $(this).find('.event-card__heading').text();
        const label = $(this).find('.event-card__label > img').attr('alt');
        const ticketLink = $(this)
          .find('.event-card__meta-column--ticket-link > a')
          .attr('href');

        const data = createShow({
          title,
          label,
          date,
          ticketLink,
          scene: 'parkteateret',
        });

        shows.push(data);
      });
    });
  } catch (error) {
    throw Error(error);
  }
}
