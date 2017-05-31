import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class Counter extends React.Component{
    state={
        count:0
    }
    increment = () =>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
    decrement = () =>{
        this.setState((prevState)=>({
            count: prevState.count - 1
        }))
    }

    render(){
        
        return(
            <div id='counter_wrapper'>
                <p className='countTxtPStyle'>{this.state.count}</p>
                <button className='buttonStyle'onClick={this.increment}>Increment</button>
                <button className='buttonStyle' onClick={this.decrement}>Decrement</button>
            </div>
            
        )
    }
}

export default Counter;