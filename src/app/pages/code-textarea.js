import React, { useState, useEffect, useRef } from 'react';

const CodeEditor = (props) => {
  const {wrap,attachcopyButton,idOfTextArea,autoFocus,placeholder,TextAreaColumns,TextAreaRows,textAreaStyle,linestyle,content, setContent,copyButtonFunction,editable}=props.textAreaProperties
  
  const [lineNumbers, setLineNumbers] = useState(['1']);
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  // Handle content change and update line numbers
  const handleContentChange = (e) => {
    const text = e.target.value;
    setContent(text);
    const lines = text.split('\n').length;
    const numbers = Array.from({ length: lines }, (_, i) => i + 1);
    setLineNumbers(numbers);
  };

  // Synchronize scrolling between textarea and line numbers
  const onScrollHandler = (e) => {
    lineNumbersRef.current.scrollTop = e.target.scrollTop;
  };

  return (
    <div className="relative flex-1 min-w-md flex h-96"> {/* Parent div with fixed height */}
      <div
        className="relative flex w-full h-full overflow-auto border border-gray-300 rounded-lg"
        id="scrollContainer"
      >
        <div
          className={linestyle}
          id="lineNumbers"
          ref={lineNumbersRef}
        >
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
          autoFocus={false}
          wrap={wrap}
          style={{ resize: 'none' }}
          value={content}
          onChange={handleContentChange}
          onScroll={onScrollHandler}
          ref={textareaRef}
          contentEditable={editable}
        ></textarea>
      </div>
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
};

export default CodeEditor;
