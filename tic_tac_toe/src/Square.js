import React, { Component } from 'react';
import square from './square.css'

class Square extends Component {
  render() {

    let letter = this.props.xOrO
    console.log(`letter: ${letter}`)
    let arrOfBoxes = []

    const update = (e)=>{
        console.log(e.target.id)
        this.props.updateXOrO(e.target.id)
    }
    for(let x=0; x<9; x++){
        if(this.props.board[x] === 'X'){
            arrOfBoxes.push(<div className="square" key={x} id={x} onClick={update}>X</div>)
        }else if(this.props.board[x] === 'O'){
            arrOfBoxes.push(<div className="square" key={x} id={x} onClick={update}>O</div>)
        }else if (this.props.board[x] === ''){
            arrOfBoxes.push(<div className="square" key={x} id={x} onClick={update}></div>)
        }
        
    }

    return (
        <div className="container">
            <div>Next player: {this.props.xOrO}</div>
            {arrOfBoxes}
        </div>
      
    );
  }
}
export default Square;