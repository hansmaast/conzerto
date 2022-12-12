import { load } from 'cheerio';
import fetch from 'node-fetch';
import { createShow } from '../helpers/models.mjs';
import { parseDateString } from '../helpers/parseDateString.mjs';
import { sceneMap, ticketStatusMap } from './utils.mjs';

const rockefellerUrl = 'https://www.rockefeller.no';

export async function fetchRockefellerShows(url = rockefellerUrl) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = load(html);
  const elementsWithShowInfo = $('.show');

  const shows = [createShow()];
  shows.shift();

  elementsWithShowInfo.each(function () {
    let date = $(this).find('.datofelt').html().split('<br>')[1];
    date = parseDateString(date);

    const title = $(this).find('.ptitle').text().split('\n')[0].trim();
    const sceneClass = $(this).find('.sknapp').attr('class').split(' ')[1];
    const scene = sceneMap[sceneClass];
    const ticketLink = $(this).find('.tknapp').attr('href');

    const ticketStatusClass = $(this)
      .find('.tknapp')
      .attr('class')
      .split(' ')[1];
    const ticketStatus = ticketStatusMap[ticketStatusClass];

    const data = createShow({
      date,
      title,
      scene,
      ticketLink,
      ticketStatus,
    });

    shows.push(data);
  });

  return shows;
}


