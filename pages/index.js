import Head from "next/head";
import styles from "../styles/css/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lolinck API</title>
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
        <h1>Introduction</h1>
        <p>
          Lolinck is an open source API that use machine learning to detect if a
          website is safe or not. Detect NSFW, phishing, malware, ip logging and
          more. This API was powered by
          <a href="https://dsc.gg/loick"> LoickTeam</a>.
        </p>
        <h2>How it works</h2>
        <p>
          Now we are in the process to recolect enought data to train our AI. To
          check links we check the content of the website, the code and the
          headers. We also check in our db and the biggest public db of links.
        </p>
        <h2>Getting started</h2>
        <p>
          We have a lot of samples for the most famous programming languages. We
          also have libraries por python and for nodejs. Or you can only make a
          simple request to our API. However you have to know that we put a
          limit for free users. If you are a free user you can only make 1
          request per 2 seconds., and 1million requests per month. If you want
          to remove this limit you can buy a premium plan. If you want to know
          about our premium tier check visit
          <Link href="/premium">
            <a> the next page</a>
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
