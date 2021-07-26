import React, {useState} from 'react'
import ListItem from './ListItem';

export default function ListAndKeys(props) {

    // const [input, setinput] = useState("");
    const [names, setNames] = useState([])
    // const listContent = names.map((name) => 
    //     <ListItem value = {input} key = {name.toString()} />
    // );

    // let handleOnClick = (event)=>{
    //     let inputField = document.querySelector("input");
    //     setinput(inputField.value);
    // }

    function handleInput(){
        let input = document.querySelector("input");
        setNames(prevState =>{
            // let state = [...prevState];
            let state = [];
            state.push(input.value, ...prevState);
            // state.push([...prevState]);
            return state;
        });
    }

    return (
        <div className = "App">
            <input id="input" />
            <br/>
            <button onClick={handleInput}>Sumbit</button>
            {names.map(name => <div key={name.toString()}>{name}</div>)}
        </div>
    )
}
