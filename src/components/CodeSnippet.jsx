import { CodeBlock, CopyBlock, github, dracula } from "react-code-blocks"
import React from "react"

const CodeSnippet = ({
  code,
  language = "javascript", // default to 'javascript'
  showLineNumbers = true,
  isCopyable = true, // enables/disables copy button
  highlight = "", // for highlighting specific lines
  theme = dracula, // default theme
}) => {
  return (
    <div className="w-[300px] xs:w-[400px] sm:w-[580px] md:w-full text-xs border rounded-md bg-[#282A36] overflow-auto">
      {isCopyable ? (
        <CopyBlock
          text={code}
          language={language}
          showLineNumbers={false}
          theme={theme}
          highlight={highlight}
          codeBlock
        />
      ) : (
        <CodeBlock
          text={code}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={theme}
          highlight={highlight}
        />
      )}
    </div>
  )
}

export default CodeSnippet
