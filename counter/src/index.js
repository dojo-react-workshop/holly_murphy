import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.js';
import './main.css';

class App extends React.Component{

    state={
            noOfCounters:1
        }

    addCounter = () =>{
        this.setState((prevState)=>({
            noOfCounters: prevState.noOfCounters + 1
        }))
    }

    listOfCounters = () =>{
        let counters = []
        for(let x=0; x<this.state.noOfCounters; x++){
            counters.push(<Counter key={x}/>)
        } 
        return counters
    } 
    

    render(){
        return (
            <div>
                <button onClick={this.addCounter}>Add counter</button>
                {this.listOfCounters()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
