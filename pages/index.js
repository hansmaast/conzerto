import Head from "next/head";
import { useState } from "react";
import { createClient } from "redis";
import styles from "../styles/Home.module.css";

const title = "Tært Conzært";

const Button = ({ isActive, children, onClick }) => (
  <button style={{
    backgroundColor: isActive && "#569166",
  }} onClick={onClick}>
    {children}
  </button>
);

export default function Home({ shows }) {
  console.log("shows", shows);

  const [scene, setScene] = useState();

  const showsToRender = scene
    ? shows[scene]
    : [...shows.parkteateret, ...shows.rockefeller];

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by a magician" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>
          {"Check out some of our shows below!"}
        </p>

        <div className={styles.buttons}>
          <Button isActive={!scene} onClick={() => setScene()}>
            All
          </Button>
          <Button isActive={scene === 'rockefeller'} onClick={() => setScene("rockefeller")}>Rockefellaz</Button>
          <Button isActive={scene === 'parkteateret'} onClick={() => setScene("parkteateret")}>Parky</Button>
        </div>

        <div className={styles.grid}>
          {showsToRender.map((show, i) => (
            <a
              key={show.title + "_" + i}
              href={show.ticketLink}
              className={styles.card}
            >
              {/* Show title */}
              <h2>{show.title.toUpperCase()}</h2>
              {show.label && (
                {/* <p className={styles.label}>{show.label}</p> */}
              )}
              {show.date && (
                {/* <p className={styles.date}>{show.date}</p> */}
              )}
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Simplo
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    url: process.env.redis_url,
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  let mergedShows = [];

  let shows = await client.hGetAll("shows");

  Object.keys(shows).forEach((key) => {
    shows[key] = JSON.parse(shows[key]);
    mergedShows = [...mergedShows, ...shows[key]];
  });

  console.log("shows", shows);

  await client.disconnect();

  return {
    props: {
      shows,
      mergedShows,
    },
  };
}
