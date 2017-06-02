import React, { Component } from 'react';
import Square from './Square.js'

class Board extends Component {
  state={
    xOrO: 'X',
    board: ['','','','','','','','',''],
    game: 'in progress'
  }

   updateXOrO = (id) => {
    //update your state
    let winner='in progress'
    
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
    winner = this.gameOver()
    if (winner === 'X'){
      this.setState((prevstate)=>{
        prevstate.game='X'
      })
    }else if(winner ==='O'){
      this.setState((prevstate)=>{
        prevstate.game='O'
      })
    }
  }

  gameOver = () => {
    //check all 8 conditions
    let winnerArray = []
    let condOne, condTwo, condThree, condFour, condFive, condSix, condSeven, condEight 

    winnerArray.push(condOne = this.winner(0,1,2))
    winnerArray.push(condTwo = this.winner(3,4,5))
    winnerArray.push(condTwo = this.winner(6,7,8))
    winnerArray.push(condTwo = this.winner(0,3,6))
    winnerArray.push(condTwo = this.winner(1,4,7))
    winnerArray.push(condTwo = this.winner(2,5,8))
    winnerArray.push(condTwo = this.winner(0,4,8))
    winnerArray.push(condTwo = this.winner(2,4,6))

    for(let x=0; x<9; x++){
      if(winnerArray[x] === 'X' || winnerArray[x] === 'O'){
        return winnerArray[x]
      }
    }
  
    return 'in progress'
    
  }
    winner = (iOne,iTwo,iThree) =>{
    let xCount = 0
    let oCount = 0
    if(this.state.board[iOne] ==='O'){
      oCount += 1
    }else if(this.state.board[iOne]==='X'){
      xCount +=1
    }

    if(this.state.board[iTwo] ==='O'){
      oCount += 1
    }else if(this.state.board[iTwo]==='X'){
      xCount +=1
    }

    if(this.state.board[iThree] ==='O'){
      oCount += 1
    }else if(this.state.board[iThree]==='X'){
      xCount +=1
    }

    if(xCount === 3){
      return 'X'
    }else if(oCount === 3){
      return 'O'
    }
    return 'in progress'
  }//end of winner

 
 
  render() {
    console.log(`state before rendering: ${this.state.game}`)

    return (
      <div className="Board">
        <Square xOrO={this.state.xOrO} updateXOrO={this.updateXOrO} board={this.state.board} game={this.state.game} />
      </div>
    );
  }
}
export default Board;