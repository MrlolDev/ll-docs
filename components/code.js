import { CopyBlock, dracula } from "react-code-blocks";

export default function Code(options) {
  var code = options.code;
  var language = options.language;
  if (language == "ru") language = "ruby";
  if (language == "rs") language = "rust";
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
