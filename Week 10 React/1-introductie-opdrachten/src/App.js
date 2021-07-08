import React, { useState, useEffect } from 'react'
import ClassResult from "./ClassResult";
import FunctionResult from './FunctionResult'

function App() {

  const [input, setInput] = useState("");
  // let inputElement = document.querySelector("input");
  useEffect(() => {

  });

  let arrowFunction = (event) => setInput(event.target.value);

  function inputHandler (event){
    setInput(event.target.value);
  }

  return (
    <div>
      <input onChange={inputHandler}></input>
      <ClassResult content={input} />
      <FunctionResult value={input} />
    </div>
  );
}

export default App;
