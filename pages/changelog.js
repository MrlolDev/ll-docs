import Head from "next/head";
import styles from "../styles/css/Home.module.css";
import Script from "next/script";
import showdown from "showdown";
const converter = new showdown.Converter();
import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";
const dompurify = createDomPurify(new JSDOM().window);

export default function Changelog(options) {
  var lastRelease = options.lastRelease;
  return (
    <div>
      <Head>
        <title>Lolinck API | {lastRelease.name}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/05bb22a118.js"
        crossOrigin="anonymous"
      ></Script>
      <main>
        <h1>v{lastRelease.name}</h1>
        <article
          id="content"
          dangerouslySetInnerHTML={{ __html: lastRelease.content }}
        ></article>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  var releases = await fetch(
    "https://api.github.com/repos/TeamLoick/ll-api/releases"
  );
  releases = await releases.json();
  if (releases.length < 1) {
    return {
      props: {
        lastRelease: {
          name: "0.0.0",
          content: "<p>No release found</p>",
        },
      },
    };
  }
  var lastRelease = releases[0];
  // markdown to html
  var content = dompurify.sanitize(converter.makeHtml(lastRelease.body));
  // detect links and put inside a tag
  content = content.replace(
    /((http|https|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?)/g,
    '<a href="$1">$1</a>'
  );
  lastRelease.content = content;
  return {
    props: {
      lastRelease,
    },
  };
}
