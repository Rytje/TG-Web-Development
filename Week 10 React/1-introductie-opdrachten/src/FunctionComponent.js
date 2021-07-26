import React, {useState} from 'react'

export default function FunctionComponent(props) {

    const [input, setinput] = useState("");

    function handleInput(event){
        setinput(event.target.value);
    }

    return (
        <div>
            {/* <h2>Function Component + input: {input}</h2> */}
            <h2>Function Component + input: {props.state}</h2>
            <input onChange={props.onChange} value = {props.state} />
        </div>
    )
}
