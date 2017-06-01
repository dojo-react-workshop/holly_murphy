import React, { Component } from 'react';
import Square from './Square.js'

class Board extends Component {
  state={
    xOrO: 'X',
    board: ['','','','','','','','','']
  }
  updateXOrO = (id) => {
    //update your state
    if(this.state.xOrO === 'X'){
      this.setState((prevstate)=>{
        prevstate.xOrO= 'O',
        prevstate.board[id]='X'
      })
    }else{
      this.setState((prevstate)=>{
        prevstate.xOrO= 'X',
        prevstate.board[id]='O'
      })
    }
    
  }
  render() {
    return (
      <div className="Board">
        <Square xOrO={this.state.xOrO} updateXOrO={this.updateXOrO} board={this.state.board} />
      </div>
    );
  }
}
export default Board;