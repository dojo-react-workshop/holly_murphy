import React, { Component } from 'react';
import Square from './Square.js'

class Board extends Component {
  state={
    xOrO: 'X',
    board: ['','','','','','','','',''],
    plays: 0,
    historicalState: [{
        xOrO: 'X',
        board: ['','','','','','','','',''],
        plays: 0
    },{},{},{},{},{},{},{},{}]
  }
  
  revert = (state_num)=>{
    this.setState((prevState)=>{
      console.log(`state_num: ${state_num}`)
      if(state_num==='0'){
        console.log('inhere')
        let newState = {...prevState};
        newState.xOrO= 'O'
        newState.board= ['','','','','','','','',''],
        newState.plays=0,
        newState.historicalState=[{
          xOrO: 'X',
          board: ['','','','','','','','',''],
          plays: 0
          },{},{},{},{},{},{},{},{}]

        return newState
      }else{
        let newState = {...prevState};
        newState.xOrO= prevState.historicalState[state_num].xOrO
        newState.board= prevState.historicalState[state_num].board
        newState.plays=prevState.historicalState[state_num].plays
        //only populate your historicalState up to the # of plays you now reset to
        for(let i=0; i<newState.historicalState.length; i++){
          if(i<=newState.plays){
            newState.historicalState[i] = prevState.historicalState[i]
          }else{
            newState.historicalState[i] = {}
          }
        }
          
        return newState
      }  
    })
  }


   updateXOrO = (id) => {
    //update your state 
        if(this.state.xOrO === 'X'){
          this.setState((prevstate)=>{
            let newState = {...prevstate}
            newState.xOrO = 'O',
            newState.board[id]='X',
            newState.plays=prevstate.plays+1
            newState.historicalState[prevstate.plays] = {
              xOrO:newState.xOrO,
              board:{...newState.board},
              plays:newState.plays
            }
            return newState
          })
        }else{
          this.setState((prevstate)=>{
            let newState = {...prevstate}
            newState.xOrO = 'X',
            newState.board[id]='O',
            newState.plays=prevstate.plays+1
            newState.historicalState[prevstate.plays] = {
              xOrO:newState.xOrO,
              board:{...newState.board},
              plays:newState.plays
            }
            return newState
          })
        }
   }
 
  render() {
    return (
      <div className="Board">
        <Square state={this.state} update={this.updateXOrO} revert={this.revert} />
      </div>
    );
  }
}
export default Board;