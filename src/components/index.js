import { useEffect, useState } from "react";
import axios from 'axios';
import CodeEditor from "./codeInput/codeInput";


export default function InputCode() {
  const [codeState, setCodeState] = useState("");
  const [output, setOut] = useState("");

  async function getOutput() {
    const response = await fetch('/test');
    let re = await response.text();
    console.log(re, 're');
  }


  async function setOutput() {
    const options = {
      method: 'POST',
      url: 'https://online-code-compiler.p.rapidapi.com/v1/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd4e3498e3fmsh8284d6aef8946f9p15b5fajsnafb6273d42b2',
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
      },
      data: {
        language: 'python3',
        version: 'latest',
        code: codeState,
        input: null
      }
    };

    try {
      const response = await axios.request(options);
      setOut(response.data.output);
    }
    catch (error) {
      console.error(error);
    }
  }

  const CodeHandler = (e) => {
    setOutput();
    e.preventDefault();
  }




  return (<>
    <div className="ce-container">
      <div className="ce-code-snippet">
        <form onSubmit={(e) => CodeHandler(e)} method="POST">
          <textarea onChange={(e) => setCodeState(e.target.value)} rows={20} cols={80} type="text" placeholder="Code..." />
          <input type="submit" />
        </form>
      </div>
      <div className="ce-code-results">
        <CodeEditor />
      </div>
    </div>
  </>)
}