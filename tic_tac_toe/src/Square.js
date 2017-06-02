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
    if(this.props.game === 'X' || this.props.game === 'O'){
        arrOfBoxes.push(<div className="winner">{this.props.game} Won!</div>)
    }else{
        arrOfBoxes.push(<div id='player'>Next player: {this.props.xOrO}</div>)
        for(let x=0; x<9; x++){
            if(this.props.board[x] === 'X'){
                arrOfBoxes.push(<div className="square" key={x} id={x} onClick={update}><p>X</p></div>)
            }else if(this.props.board[x] === 'O'){
                arrOfBoxes.push(<div className="square" key={x} id={x} onClick={update}><p>O</p></div>)
            }else if (this.props.board[x] === ''){
                arrOfBoxes.push(<div className="square" key={x} id={x} onClick={update}></div>)
            }
            
        }
}

    return (
        <div className="container">
            {arrOfBoxes}
        </div>
      
    );
  }
}
export default Square;