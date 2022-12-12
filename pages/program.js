import Head from "next/head";
import { DateSelection, SceneSelector } from "../lib/components/Selectors";
import { Shows } from "../lib/components/Shows";
import { StickyNavigation } from "../lib/components/StickyNavigation";
import { useDateInView } from "../lib/hooks/useDateInView";
import { useShows } from "../lib/hooks/useShows";
import { fetchAllShows } from "../lib/scraper/fetchAllShows.mjs";
import styles from "../styles/Home.module.css";

const title = "OSLO";

export default function Program({ scenes, allShows }) {
  const shows = useShows(allShows);
  const { dateInView } = useDateInView(shows);

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
          selected={shows.scene}
          setSelected={shows.setScene}
        />
        <hr />

        <DateSelection
          dateOption={shows.dateOption}
          setDateOption={shows.setDateOption}
        />
        <hr />
        <StickyNavigation
          dateInView={dateInView}
          dateOption={shows.dateOption}
          scene={shows.scene}
        />
        <Shows showsToRender={shows.showsToRender} />
      </main>

      <footer className={styles.footer}>©hansmaast</footer>
    </div>
  );
}

export async function getStaticProps() {
  const allShows = await fetchAllShows();
  const scenes = [...new Set(allShows.map((show) => show.scene))];

  return {
    props: {
      scenes,
      allShows: JSON.parse(JSON.stringify(allShows)),
    },
  };
}
