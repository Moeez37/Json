import React, { useState, useEffect, useRef } from 'react';

const CodeEditor = () => {
  const [content, setContent] = useState('');
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
          className="absolute top-0 left-0 h-full w-12 bg-gray-200 text-gray-600 text-right pt-4 pr-2 border-r border-gray-300 overflow-hidden"
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
          id="codeTextArea"
          rows={20}
          cols={30}
          className="flex-1 h-full bg-transparent font-mono p-4 focus:outline-none resize-none pl-16"
          placeholder="Type your code here..."
          autoFocus={false}
          wrap="off"
          style={{ resize: 'none' }}
          value={content}
          onChange={handleContentChange}
          onScroll={onScrollHandler}
          ref={textareaRef}
        ></textarea>
      </div>
    </div>
  );
};

export default CodeEditor;
