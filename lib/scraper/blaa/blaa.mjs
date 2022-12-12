import { load } from "cheerio";
import fetch from "node-fetch";
import { createShow } from "../helpers/models.mjs";
import { parseDate } from "./parseDate.mjs";

export const url = "https://www.blaaoslo.no/#program";

export const fetchBlaaShows = async () => {
  const shows = [createShow()];
  shows.shift();

  const response = await fetch(url);
  const html = await response.text();
  const $ = load(html);

  const elementsInMonth = $(".month");
  elementsInMonth.each(function () {
    const monthWithYear = $(this).attr("id");
    const [month, year] = monthWithYear.split("-");

    const elementsInDay = $(this).find(".day");
    elementsInDay.each(function () {
      const day = $(this).find("time .number").text();
      const date = parseDate(day, month, year);

      const eventsOnDay = $(this).find(".event");
      eventsOnDay.each(function () {
        const title = $(this).find("h1").text();
        const label = $(this).find("h2").text();

        const ticketLink = $(this).find(".icon-price").attr("href");
        const price = $(this).find(".icon-price").text();
        const doorsOpen = $(this).find(".icon-time").text();

        if (!title || !date) return;

        const show = createShow({
          title,
          label,
          date,
          ticketLink,
          price,
          doorsOpen,
          scene: "blaa",
        });

        shows.push(show);
      });
    });
  });

  return shows;
};
