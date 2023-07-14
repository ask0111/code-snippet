import { useEffect, useState } from "react";
import axios from 'axios';

// import { json } from "react-router-dom";

export default function InputCode() {
  const [codeState, setCodeState] = useState("");
  const [render, setRender] = useState(true);

  async function getOutput() {
    const response = await fetch('/test');
    let re = await response.text();
    console.log(re, 're');
  }

  async function setOutput(){
    await axios.post('/test', { code: codeState }).then((resp)=>{console.log(resp.data)}).catch((err)=> {
      console.log(err);
    })


    // await fetch('/test', {
    //   method: 'POST',
    //   headers: { 'content-Type': 'application/json' },
    //   body: JSON.stringify({ code: codeState })
    // }).then((res)=> res.json()).then((res)=>console.log(res)).catch((err) => {
    //   console.log(err)
    // })
  }

  const CodeHandler = (e) => {
    e.preventDefault();
    // setOutput();
    getOutput();
    
    
  }
  
  


  return (<>
    <div className="App">
      <form onSubmit={(e) => CodeHandler(e)} method="POST">
        <textarea onChange={(e) => setCodeState(e.target.value)} rows={20} cols={80} type="text" placeholder="Code..." />
        <input type="submit" />
      </form>
      <div className="output"></div>
    </div>
  </>)
}