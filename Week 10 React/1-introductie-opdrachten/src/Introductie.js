import React, {useState} from 'react'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'

export default function Introductie() {

    const [state, setState] = useState("");

    let inputFunction = (event)=>{
        setState(event.target.value);
    }

    return (
        <div>
            <h1>Hello world</h1>
            <ClassComponent onChange = {inputFunction} state = {state} />
            <FunctionComponent onChange = {inputFunction} state = {state} />
        </div>
    )
}
