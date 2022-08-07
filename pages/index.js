import Head from "next/head";
import styles from "../styles/css/Home.module.css";
import Code from "../components/code";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LoLinck API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Code code={`import { CopyBlock, atomOneDark } from "react-code-blocks";`} language="javascript" />
    </div>
  );
}
