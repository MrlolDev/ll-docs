import Head from "next/head";
import styles from "../styles/css/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lolinck API | How it works</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Lolinck is an open source API that use machine learning to detect if a website is
          safe or not. Detect NSFW, phishing, malware, ip logging and more."
        />
        <meta
          name="keywords"
          content="lolinck, api, loick, loickteam, link api, link check"
        />
        <meta name="author" content="LoickTeam" />
        <meta name="theme-color" content="#BE4949" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Lolinck API" />
        <meta
          property="og:description"
          content="Lolinck is an open source API that use machine learning to detect if a website is
          safe or not. Detect NSFW, phishing, malware, ip logging and more."
        />

        <meta property="og:url" content="https://lolinck.xyz" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="Lolinck API" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
      </Head>

      <main>
        <h1>How it works</h1>
        <p>
          The API use 3 methods to detect if a website is safe or not. <br />
          <b>The first method</b>
          is check in our db that we expand with the results of other methods.
          This db has also content from public dbs. <br />
          <b>The second method</b> is the logical method where we check the
          content of the page, the headers and all the information about the
          page to give a results. <br />
          And <b>the third method</b> that is continue under development is the
          AI that have been trained with a lot of data from our db to detect if
          a website is safe or not.
        </p>
      </main>
    </div>
  );
}
