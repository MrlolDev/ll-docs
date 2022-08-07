import Code from "../components/code";
import Head from "next/head";
import { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
export default function Sample(options) {
  var [Samples, setSamples] = useState(options.samples);
  function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }
  if (Samples.length != 0) {
    return (
      <>
        <Head>
          <title>Lolinck API - Samples</title>
        </Head>
        <main className="sample">
          <h1 className="sample_title">Samples</h1>
          <div className="sample_code">
            {Samples.map((sample) => (
              <div
                className="sample_code_sample"
                key={sample.name}
                id={sample.name.replaceAll(" ", "-")}
              >
                <h2>{capitalizeFirstLetter(sample.name)}</h2>
                <Code code={sample.code} language={sample.name} />
              </div>
            ))}
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main className="sample">
          <div className="sample_code">
            <h1>Loading...</h1>
          </div>
        </main>
      </>
    );
  }
}
export async function getStaticProps() {
  var samples = [];
  var files = fs.readdirSync(path.join(process.cwd(), "samples"));
  files.forEach((file) => {
    var code = fs.readFileSync(
      path.join(process.cwd(), `samples/${file}`),
      "utf8"
    );
    var lang = file.split(".")[0];
    samples.push({ name: file.split(".")[0], code: code });
  });
  return {
    props: {
      samples: samples,
    },
  };
}
