import React, {useState} from 'react'

export default function FunctionComponent() {

    const [input, setinput] = useState("")

    function handleInput(event){
        setinput(event.target.value);
    }

    return (
        <div>
            <h2>Function Component + input: {input}</h2>
            <input onChange={handleInput} />
        </div>
    )
}
