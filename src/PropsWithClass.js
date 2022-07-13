import React from "react";

export class PropsWithClass extends React.Component
{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}