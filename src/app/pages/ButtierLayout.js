"use client";
import React, { useState, useEffect } from "react";
import CodeTextArea from "./code-textarea";

export default function ButtierLayout() {
  const [error, setError] = useState(false);

  const jsonBeautifier = (json) => {
    try {
      if (json.length == 0) {
        document.getElementById("output").value = "{}";
        return;
      }
      const prettyJson = JSON.stringify(JSON.parse(json), null, 4);
      setError(false);
      document.getElementById("output").value = prettyJson;
    } catch (error) {
      document.getElementById("output").value = error.message;
      setError(true);
    }
  };

  const copyToClipboard = () => {
    const outputArea = document.getElementById("output");
    outputArea.select();
    document.execCommand("copy");
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
  };
  const text_are_style =
    `output-area flex-1 w-full h-full pl-16 font-mono p-4 border rounded-lg shadow focus:outline-none transition-all duration-300 ` +
    (error
      ? "bg-red-100 text-red-800 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500"
      : "bg-white text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500");
  const output = {
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
  };

  return (
    <div className="flex flex-row items-start gap-4 m-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Input Area with Line Numbers */}
      <CodeTextArea textAreaProperties={input} />
      {/* <div className="relative flex-1 min-w-md">
                <div className="absolute top-0 left-0 h-full w-12 bg-gray-200 text-gray-600 text-right pt-4 pr-2 border-r border-gray-300 rounded-l-lg overflow-hidden">
                    {lineNumbers.map(number => (
                        <div key={number} className="leading-6">
                            {number}
                        </div>
                    ))}
                </div>
                <textarea 
                    id="input"
                    rows="20" 
                    cols="30" 
                    className="input-area flex-1 w-full h-full pl-16 bg-white text-gray-800 font-mono p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300" 
                    placeholder="Paste your JSON here..." 
                    autoFocus>
                </textarea>
            </div> */}

      {/* Beautify Button */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => jsonBeautifier(document.getElementById("input").value)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Beautify
        </button>
      </div>

      {/* Output Area */}
      <CodeTextArea textAreaProperties={output} />
    </div>
  );
}
