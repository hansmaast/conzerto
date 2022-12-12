import { load } from 'cheerio';
import { createShow } from '../helpers/models.mjs';
import { parseDate } from './parseDate.mjs';

export const parseHtml = (content) => {
  const $ = load(content);

  const elementsWithShowInfo = $('.column.column-block');

  const shows = [createShow()];
  shows.shift();

  elementsWithShowInfo.each(function () {
    let date = $(this).find('time').text();
    date = parseDate(date);

    const genres = $(this).find('.genres').text().split(' ');
    const ticketStatus = $(this).find('.ticket-status').text();
    const title = $(this).find('.views-field.views-field-title a').text();
    const ticketLink = $(this)
      .find('.views-field-field-ticket-link a')
      .attr('href');

    const show = createShow({
      title,
      genres,
      label: ticketStatus,
      date,
      ticketLink,
      scene: 'cosmopolite',
    });

    shows.push(show);
  });

  return shows;
};
