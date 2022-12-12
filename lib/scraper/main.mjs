import { db } from "./database/setup.mjs";
import * as fetchers from "./fetchers/index.mjs";
import * as scraper from "./scraper/index.mjs";

const timer = "Total time";
console.time(timer);

try {
  await Promise.allSettled([
    scraper.scrape("parkteateret", fetchers.fetchParkteateretShows, db),
    scraper.scrape("cosmopolite", fetchers.fetchCosmopoliteShows, db),
    scraper.scrape("blaa", fetchers.fetchBlaaShows, db),
    scraper.scrapeRockefellerScenes(db),
  ]);
} catch (error) {
  throw Error(error);
}

scraper.logger({ text: "Fetching", success: "Done!" }).success();
console.timeEnd(timer);
