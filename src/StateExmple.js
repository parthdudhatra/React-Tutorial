
// State use in the function component beacuse variable is to update the value that's why use the state
import { useState } from "react";
import './App.css';

export function StateExmple(){
    const [data, setData] = useState(0)
    function update(){
        setData(data+1)
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={update}>Update Me</button>
        </div>
    )        
}