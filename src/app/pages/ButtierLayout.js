"use client";
import React, { useState, useEffect } from "react";
import CodeTextArea from "./code-textarea";

export default function ButtierLayout() {
  const [error, setError] = useState("");
  const [output, setOutput] = useState("")
  const [Content, setContent] = useState('');
  const jsonBeautifier = (json) => {
    console.log("beauty")
    try {
      if (json.length == 0) {
        setError(false);
        setOutput("{}")
        return;
      }
      const prettyJson = JSON.stringify(JSON.parse(json), null, 4);
      setOutput(prettyJson)
      setError(false);
    } catch (error) {
    
      setError(true);
      setOutput(error.message)
    }
  };

  const copyToClipboard = async() => {
    try {
      await navigator.clipboard.writeText(output);
    
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
    }
  };

  const input = {
    linestyle:
      "absolute top-0 left-0 h-full w-12 bg-gray-200 text-gray-600 text-right pt-4 pr-2 border-r border-gray-300  overflow-hidden",
    textAreaStyle:
      "input-area flex-1 w-full h-full pl-16 bg-white text-gray-800 font-mono p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300",
    TextAreaRows: 20,
    TextAreaColumns: 30,
    placeholder: "Paste your JSON here...",
    autoFocus: true,
    idOfTextArea: "input",
    attachcopyButton: false,
    wrap: "off",
    setContent,
    Content,
    editable: true
  };
  const text_are_style =
    `output-area flex-1 w-full h-full pl-16 font-mono p-4 border rounded-lg shadow focus:outline-none transition-all duration-300 ` +
    (error
      ? "bg-red-100 text-red-800 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500"
      : "bg-white text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500");
  const outputProps = {
    linestyle:
      "absolute top-0 left-0 h-full w-12 bg-gray-200 text-gray-600 text-right pt-4 pr-2 border-r border-gray-300  overflow-hidden",
    textAreaStyle: text_are_style,
    TextAreaRows: 20,
    TextAreaColumns: 30,
    placeholder: "Converted output will appear here...",
    autoFocus: false,
    idOfTextArea: "output",
    attachcopyButton: true,
    copyButtonFunction: copyToClipboard,
    error,
    wrap: "on",
    content: output,
    setContent: setOutput,
    editable: false
  };

  return (
    <div className="flex flex-row items-start gap-4 m-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      <CodeTextArea textAreaProperties={input} />
      <div className="flex flex-col gap-4">
        <button
          onClick={() => jsonBeautifier(Content)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Beautify
        </button>
      </div>
      <CodeTextArea textAreaProperties={outputProps} />
    </div>
  );
}
