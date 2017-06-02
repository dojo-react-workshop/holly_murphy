import React, { Component } from 'react';
import Square from './Square.js'

class Board extends Component {
  state={
    xOrO: 'X',
    board: ['','','','','','','','',''],
    plays: 0
  }

   updateXOrO = (id) => {
    //update your state 
        if(this.state.xOrO === 'X'){
          this.setState((prevstate)=>{
            let newState = {...prevstate}
            newState.xOrO = 'O',
            newState.board[id]='X',
            newState.plays=prevstate.plays+1
            return newState
          })
        }else{
          this.setState((prevstate)=>{
            let newState = {...prevstate}
            newState.xOrO = 'X',
            newState.board[id]='O',
            newState.plays=prevstate.plays+1
            return newState
          })
        }
   }
 
  render() {
    return (
      <div className="Board">
        <Square xOrO={this.state.xOrO} updateXOrO={this.updateXOrO} board={this.state.board} game={this.state.game} plays={this.state.plays} />
      </div>
    );
  }
}
export default Board;