"use client";
import React, { useState, useEffect } from "react";
import CodeTextArea from "./code-textarea";
import { jsonBeautifier } from "../utils/utils";
import {Types,SubType} from "../types/editor-types"
import TextAreaTypes from "../types/text-area-types";
import { getPropObjectForTextAreaWrapper } from "../config/beautifier";
export  function EditorLayout({EditorType,EditorSubType}) {
  const [error, setError] = useState("");
  const [output, setOutput] = useState("")
  const [input, setInput] = useState('');
  
  
  const inputProps = getPropObjectForTextAreaWrapper(EditorType,EditorSubType,TextAreaTypes.INPUT,input,setInput,error)
  const outputProps = getPropObjectForTextAreaWrapper(EditorType,EditorSubType,TextAreaTypes.OUTPUT,output,setInput,error)

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

EditorLayout.defaultProps={
  EditorType : Types.BEAUTIFIER,
    EditorSubType: SubType.JSON_BEAUTIFIER
}
