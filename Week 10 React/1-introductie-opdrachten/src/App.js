import React, {useState} from 'react'
import ClassResult from "./ClassResult";
import FunctionResult from './FunctionResult'

function App() {

  const input = useState(0);

  return (
    <div>
      <input onChange = {takeInput}></input>
      <ClassResult />
      <FunctionResult />
    </div>
  );
}

function takeInput(){
  console.log("test");
}

export default App;
