import { CopyBlock, atomOneDark } from "react-code-blocks";

export default function Code(options) {
  var code = options.code;
  var language = options.language;
  return (
    <CopyBlock
      language={language}
      text={code}
      theme={atomOneDark}
      showLineNumbers={true}
      wrapLines={true}
    />
  );
}
