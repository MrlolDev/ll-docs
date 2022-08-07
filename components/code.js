import { CopyBlock, dracula } from "react-code-blocks";

export default function Code(options) {
  var code = options.code;
  var language = options.language;
  if (language == "golang") language = "go";
  return (
    <CopyBlock
      language={language}
      text={code}
      theme={dracula}
      showLineNumbers={true}
      wrapLines={true}
    />
  );
}
