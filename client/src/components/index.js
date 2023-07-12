import { useState } from "react"
// import { json } from "react-router-dom";

export default function InputCode(){
    const [codeState, setCodeState] = useState("");

    const CodeHandler = (e)=>{
        e.preventDefault();
        fetch('/test', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({code: codeState})
        }).then(()=> {
            alert("Sended..");
        })
    }


    return (<>
    <div className="App">
      <form onSubmit={(e)=>CodeHandler(e)} method="POST">
        <textarea onChange={(e)=>setCodeState(e.target.value)} rows={20} cols={80} type="text" placeholder="Code..." />
        <input type="submit" />
      </form>

    </div>
    </>)
}