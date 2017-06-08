import React, { Component } from 'react';

const Counter = (props) => {

    console.log(`props in counter`, props.count)
    console.log(props)
    return (
        <div className="counter">
            <div className='row'>
                <div className='small-1 col'>
                    <p>Counter: </p>
                    <h1>{props.count}</h1>
                </div>
                <br />
            </div>
            <div className='row'>
                <div className='small-1 col'>
                    <button onClick={props.onIncrement}>Increment</button>
                    <button onClick={props.onDecrement}>Decrement</button>
                </div>
            </div>
        </div>//counter
    );

}

export default Counter;
