import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class App extends React.Component{
    
    render(){
        return (
            <div>
                <button>Add counter</button>
                <Counter />
            </div>
        )
    }
}

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
        console.log(`count: ${this.state.count}`)
        const countWrapperStyle = {
            outline: 'black thin solid',
            width: '30%',
            margin: '0 auto',
            padding: '25px',
            textAlign: 'center'
        }
        const countTxtPStyle = {
            textAlign: 'center',
            fontSize: '24px'
        }
        const buttonStyle = {
            margin: '5px',
            display: 'inline-block'
        }
        return(
            <div id='counter_wrapper' style={countWrapperStyle}>
                <p style={countTxtPStyle}>{this.state.count}</p>
                <button style={buttonStyle} onClick={this.increment}>Increment</button>
                <button style={buttonStyle} onClick={this.decrement}>Decrement</button>
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
