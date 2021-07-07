import React, { useState, useEffect } from 'react'
import ClassResult from "./ClassResult";
import FunctionResult from './FunctionResult'

function App() {

  let [input, setInput] = useState("");
  // let inputElement = document.querySelector("input");
  useEffect(() => {

  });

  let myFunction = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  }

  return (
    <div>
      <input onChange={myFunction}></input>
      <ClassResult content={input} />
      <FunctionResult value={input} />
    </div>
  );
}

export default App;
