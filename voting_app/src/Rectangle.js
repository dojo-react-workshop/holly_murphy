import React from 'react';
import './rectangle.css'

 export class Rectangle extends React.Component{

    //  state={
    //      count: 0
    //  }
    
    // increment = () =>{
    //     this.setState((prevState)=>({
    //         count: prevState.count + 1
    //     }))
    // }
    incrementCount = () =>{
        this.props.increment(this.props.rects.name)
    }

    render(){
        return(<div className='divStyle'>
                        <div className='outLine'>
                            <div className='circleStyle'>
                                <p className='pCircle'>{this.props.rects.count}</p>
                            </div>
                            <p className='pStyle'>{this.props.rects.name}</p>
                            <img onClick={this.incrementCount} className='style' src='./plus-sign.png' alt='plus sign' />
                        </div>
                    </div>)
    }
 } 
 
export default Rectangle