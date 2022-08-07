import { useRouter } from "next/router";
import Code from "../../components/code";
import { useState, useEffect } from "react";

export default function Sample(options) {
  const router = useRouter();
  const { id } = router.query;
  var [code, setCode] = useState("");
  function getFinish(lang) {
    if (lang == "bash") {
      return "sh";
    } else if (lang == "c") {
      return "c";
    } else if (lang == "cpp") {
      return "cpp";
    } else if (lang == "golang") {
      return "go";
    } else if (lang == "java") {
      return "java";
    } else if (lang == "javascript") {
      return "js";
    } else if (lang == "python") {
      return "py";
    } else if (lang == "ruby") {
      return "ru";
    } else if (lang == "php") {
      return "php";
    } else if (lang == "rust") {
      return "ru";
    } else if (lang == "typescript") {
      return "ts";
    }
  }

  useEffect(() => {
    if (code == "" && id != undefined) {
      fetch(
        `https://api.github.com/repos/MrlolDev/ll-docs/contents/samples/${id}.${getFinish(
          id
        )}?ref=main`
      )
        .then((res) => res.json())
        .then((data) => {
          setCode(data.content);
        });
      console.log(code);
    }
  }, [id]);
  if (id && code != "") {
    return (
      <>
        <div className="sample">
          <div className="sample_code">
            <Code code={code} lang={id} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="sample">
          <div className="sample_code">
            <p>Loading...</p>
          </div>
        </div>
      </>
    );
  }
}
