import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import './CodeEditor.css'; // Import your CSS file

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
  };

  return (
    <div className="code-editor-container">
      <h1>Code Editor</h1>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
