// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { Users } from './Users';
import React,{ useState } from 'react';
// import { StateExmple } from './StateExmple';
import { StateWithClass} from './StateWithClass';
import { PropsWithFunction} from './PropsWithFunction';
import { PropsWithClass } from './PropsWithClass';
// import Me from './Users';

// class App extends React.Component {
//   // const [name, setName] = useState('Dudhatra');
//   constructor(){
//     super()
//     this.state = {
//       name : "dudhatra"
//     }
//   }
//   render(){
//     return (
//       <div className="App">
//        {/* <h1>Hello World</h1> */}
//        {/* <Users /> */}
//        {/* <Me /> */}
//        {/* <button onClick={apple}>Click Me</button> */}
//       {/* <StateExmple /> */}
//       {/* <PropsWithFunction name={name} /> */}
//       <PropsWithClass name={this.state.name} />
//       <button onClick={()=> this.setState({name : "parth"})}>Click Me</button>
//       {/* <StateWithClass /> */}
//       </div>
//     );
//   }
function App(){
  const [name, setName] = useState('Dudhatra');
  return (
    <div className="App">
     {/* <h1>Hello World</h1> */}
     {/* <Users /> */}
     {/* <Me /> */}
     {/* <button onClick={apple}>Click Me</button> */}
    {/* <StateExmple /> */}
    {/* <PropsWithFunction name={name} /> */}
    <PropsWithClass name={name} />
    <button onClick={()=> setName("parth")}>Click Me</button>
    {/* <StateWithClass /> */}
    </div>
  );
}

export default App;
