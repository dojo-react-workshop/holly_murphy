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
            prevstate.xOrO= 'O',
            prevstate.board[id]='X',
            prevstate.plays=prevstate.plays+1
          })
        }else{
          this.setState((prevstate)=>{
            prevstate.xOrO= 'X',
            prevstate.board[id]='O',
            prevstate.plays=prevstate.plays+1
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