import cheerio from "cheerio";
import { fetchData } from "../helpers/fetchData.mjs";
import { languageMap } from "../helpers/languageMap.mjs";

export async function fetchDetails(shows = []) {
  for (const show of shows) {
    try {
      await fetchData(show.link).then((res) => {
        const html = res;
        const $ = cheerio.load(html);
        show.imageUrl = $(".event-card__image").attr("src");
        show.description = $(".text-block__inner").html().replaceAll("<p>", "").replaceAll("</p>", "");

        const details = $(".event-details");

        details.each(function () {
          const rows = $(this).find(".event-details__row");
          // Get each column in row
          rows.each(function () {
            const columns = $(this).find(".event-details__column");
            const key = columns.first().text().toLocaleLowerCase();
            const value = columns.last().text().toLocaleLowerCase();
            show[languageMap[key]] = value;
          });
        });
      });
    } catch (error) {
      throw Error(error);
    }
  }
}
