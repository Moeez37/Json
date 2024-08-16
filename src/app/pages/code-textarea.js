"use client";
import React, { useState, useEffect } from "react";

export default function CodeTextArea(props) {
  const {
    TextAreaColumns,
    TextAreaRows,
    textAreaStyle,
    linestyle,
    placeholder,
    autoFocus,
    idOfTextArea,
    attachcopyButton,
    copyButtonFunction,
  } = props.textAreaProperties;

  const [lineNumbers, setLineNumbers] = useState([]);
  useEffect(() => {
    const inputArea = document.getElementById(idOfTextArea);
    updateLineNumbers(inputArea.value);

    inputArea.addEventListener(idOfTextArea, (event) => {
      updateLineNumbers(event.target.value);
    });

    return () => {
      inputArea.removeEventListener(idOfTextArea, updateLineNumbers);
    };
  }, []);
  const updateLineNumbers = (text) => {
    const lines = text.split("\n").map((_, i) => i + 1);
    setLineNumbers(lines);
  };
  return (
    <div className="relative flex-1 min-w-md overflow-hidden flex">
      <div className={linestyle}>
        {lineNumbers.map((number) => (
          <div key={number} className="text-center leading-6">
            {number}
          </div>
        ))}
      </div>
      <textarea
        id={idOfTextArea}
        rows={TextAreaRows}
        cols={TextAreaColumns}
        className={textAreaStyle}
        placeholder={placeholder}
        autoFocus={autoFocus}
      ></textarea>
      {attachcopyButton && (
        <button
          onClick={copyButtonFunction}
          className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          📋
        </button>
      )}
    </div>
  );
}
