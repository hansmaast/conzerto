import cheerio from 'cheerio';
import { fetchData } from '../helpers/fetchData.mjs';

export async function fetchDetails(url, shows = []) {
  for (const show of shows) {
    await fetchData(show.link).then((response) => {
      const $ = cheerio.load(response);
      const imagePath = $('#print img').attr('src');
      const imageUrl = `${url}${imagePath}`;
      show.imageUrl = imageUrl;

      const dateAndScene = $('.bread')
        .first()
        .text()
        .split('\n')[1]
        .trim();
      const indexOfFirstSpace = dateAndScene.indexOf(' ');
      const scene = dateAndScene.substring(indexOfFirstSpace).trim();
      show.scene = scene;

      const links = $('.bread > a');
      links.each(function () {
        const href = $(this).attr('href');
        if (href.match('ticketmaster')) {
          show.ticketLink = href;
        }
      });

      const infoText = $('.bread.pris').text();
      const price = getPrice(infoText);
      show.price = `${price} + avgiftf`;

      const doorsOpen = getDoorsOpen(infoText);
      show.doorsOpen = doorsOpen;
    });
  }
}

function getDoorsOpen(infoText) {
  const indexOfKl = infoText.indexOf('kl.');
  const doorsOpen = infoText.substring(indexOfKl).trim().split(' ')[1];
  return doorsOpen;
}

function getPrice(infoText) {
  const indexOfKr = infoText.indexOf('kr.');
  const indexOfPlusSign = infoText.indexOf('+');
  const price = infoText.substring(indexOfKr, indexOfPlusSign).trim();
  return price;
}

