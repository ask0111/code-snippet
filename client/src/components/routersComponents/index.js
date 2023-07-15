import React from 'react';
import './index.css';

const CodeSnippet = () => {
  return (
    <div className="code-snippet">
      <pre>
        <code>
          const greet = () => &#123;
          <br />
          &nbsp;&nbsp;console.log("Hello, world!");
          <br />
          &#125;;
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
