import React, {useState} from 'react'
import ListItem from './ListItem';
import {v4 as uuidv4} from 'uuid'

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
            // let state = [];
            // state.push(input.value, ...prevState);

            let state = [{id: uuidv4(), name: input.value}, ...prevState];

            console.log(state);

            // state.push([...prevState]);
            return state;
        });
    }

    return (
        <div className = "App">
            <input id="input" />
            <br/>
            <button onClick={handleInput}>Sumbit</button>
            {/* <ul>
            {names.map(name => <li key={names.id}>{name}</li>)}
            </ul> */}
            <ListItem names = {names} />
        </div>
    )
}
