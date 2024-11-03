import React from "react"

const CodeBlock = ({ code }) => {
  return (
    <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock
