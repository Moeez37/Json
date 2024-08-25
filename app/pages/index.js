"use client";
import React, { useState, useEffect } from "react";
import CodeTextArea from "../LayoutComponent/code-textarea";
import textAreaTypes from "../types/text-area-types";
import getPropObjectForTextArea from "../config/beautifier"
import { jsonBeautifier } from "../utils/utils";
export  function ButtierLayout() {
  const [error, setError] = useState("");
  const [output, setOutput] = useState("")
  const [input, setInput] = useState('');
  
  const inputProps = getPropObjectForTextArea(textAreaTypes.INPUT, input, setInput,  "Paste your JSON here...", error, false,  true,"off",  "input",  false)
  const outputProps = getPropObjectForTextArea(textAreaTypes.OUTPUT,output,setOutput,"Converted output will appear here...",error,true,true,"on","output",true)

  return (
    <div className="flex flex-row items-start gap-4 m-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      <CodeTextArea textAreaProperties={inputProps} />
      <div className="flex flex-col gap-4">
        <button
          onClick={() => jsonBeautifier(input,setError,setOutput)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Beautify
        </button>
      </div>
      <CodeTextArea textAreaProperties={outputProps} />
    </div>
  );
}
