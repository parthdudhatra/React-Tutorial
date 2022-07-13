import React,{ Component } from "react";

export class StateWithClass extends Component {
    constructor(){
        super();
        this.state = {
            data  : 1
        }
    }
    update() {
        this.setState({data:this.state.data+1})
    }
    render() {
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.update()}>Click Me</button>
            </div>
        )
    }
}

