import Head from "next/head";
import styles from "../styles/css/Home.module.css";
import Script from "next/script";

export default function Changelog() {
  return (
    <div>
      <Head>
        <title>Lolinck API | 1.0.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/05bb22a118.js"
        crossOrigin="anonymous"
      ></Script>
      <main>
        <h1>v1.0.0</h1>
        <p></p>
      </main>
    </div>
  );
}
