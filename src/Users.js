// Class Component
import React, {Component} from "react";
export default class Me extends Component
{
    render(){
        return(
            <h1>Hello Me</h1>
        )
    }
}


// Function component
export function Users() {
    return (
      <div className="App">
       <h1>Hello Users</h1>
      </div>
    );
  }
