import { isPast } from "date-fns";
import Head from "next/head";
import { useEffect, useState } from "react";
import { createClient } from "redis";
import { DateSelection } from "../components/DateSelection";
import { SceneSelector } from "../components/SceneSelector";
import { Shows } from "../components/Shows";
import { getShowsAhead } from "../helpers/Filters";
import styles from "../styles/Home.module.css";

const title = "Tært Conzært";

export default function Home({ shows, scenes, allShows }) {
  const [scene, setScene] = useState();
  const [dateOption, setDateOption] = useState("all");

  const [showsToRender, setShowsToRender] = useState(allShows);

  useEffect(() => {
    switch (dateOption) {
      case "today":
        setShowsToRender(getShowsAhead(allShows, scene, 0));
        return;
      case "thisWeek":
        setShowsToRender(getShowsAhead(allShows, scene, 7));
        return;
      case "thisMonth":
        setShowsToRender(getShowsAhead(allShows, scene, 30));
        return;
      default:
          setShowsToRender(getShowsAhead(allShows, scene, Infinity));
    }
  }, [dateOption, allShows, scene]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by a magician" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <hr />
        <SceneSelector
          scenes={scenes}
          selected={scene}
          setSelected={setScene}
        />
        <hr />
        <DateSelection dateOption={dateOption} setDateOption={setDateOption} />
        <hr />
        <Shows showsToRender={showsToRender} />
      </main>

      <footer className={styles.footer}>©hansmaast</footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    url: process.env.redis_url,
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  let allShows = [];
  let shows = await client.hGetAll("shows");
  const scenes = Object.keys(shows);

  scenes.forEach((scene) => {
    shows[scene] = JSON.parse(shows[scene]);
    allShows = [...allShows, ...shows[scene]];
  });

  allShows = allShows
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .filter((show) => isPast(new Date(show.date)) === false);

  await client.disconnect();

  return {
    props: {
      shows,
      scenes,
      allShows,
    },
  };
}
