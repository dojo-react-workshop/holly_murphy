import React, { Component } from 'react';
import square from './square.css'

class Square extends Component {
  render() {

    let arrOfBoxes = []
    const update = (e)=>{
        this.props.update(e.target.id)
    }

    const revert=(e)=>{
        console.log(`id being passed to revert: ${e.target.id}`)
        this.props.revert(e.target.id)
    }

    // do check if game is over
    const checkWinner = () =>{
        let winnerArray = []

        winnerArray.push(winner(0,1,2))
        winnerArray.push(winner(3,4,5))
        winnerArray.push(winner(6,7,8))
        winnerArray.push(winner(0,3,6))
        winnerArray.push(winner(1,4,7))
        winnerArray.push(winner(2,5,8))
        winnerArray.push(winner(0,4,8))
        winnerArray.push(winner(2,4,6))

        for(let x=0; x<9; x++){
            if(winnerArray[x] === 'X' || winnerArray[x] === 'O'){
                return  winnerArray[x]
            }
        }
       return 'no winner'
    }//checkWinner
    
    const winner = (iOne,iTwo,iThree) =>{
    let xCount = 0
    let oCount = 0
    if(this.props.state.board[iOne] ==='O'){
      oCount += 1
    }else if(this.props.state.board[iOne]==='X'){
      xCount +=1
    }

    if(this.props.state.board[iTwo] ==='O'){
      oCount += 1
    }else if(this.props.state.board[iTwo]==='X'){
      xCount +=1
    }

    if(this.props.state.board[iThree] ==='O'){
      oCount += 1
    }else if(this.props.state.board[iThree]==='X'){
      xCount +=1
    }

    if(xCount === 3){
      return 'X'
    }else if(oCount === 3){
      return 'O'
    }
    return 'no winner'
  }//end of winner

 let plays = [];
  for(let i=0; i<this.props.state.plays; i++){
      if(i===this.props.state.plays-1){
          plays.push(<div className='plays' id={i} key={10+i}>Play: {i}</div>)
      }else{
            plays.push(<div className='plays' id={i} key={10+i} onClick={revert}>Play: {i}</div>)
      }
   }

  if(checkWinner() === 'X' || checkWinner() === 'O'){
        arrOfBoxes.push(<div className="winner" key='0'>{checkWinner()} Won!</div>)
    }else if(this.props.state.plays === 9 && (checkWinner() !== 'X' || checkWinner() !== 'Y')){
        arrOfBoxes.push(<div key = '0' className="noWinner">No one wins. Game Over!</div>)
    }else{
        arrOfBoxes.push(<div id='player'>Next player: {this.props.state.xOrO}</div>)
        for(let x=0; x<9; x++){
            if(this.props.state.board[x] === 'X'){
                arrOfBoxes.push(<div className="square" key={x} id={x}><p>X</p></div>)
            }else if(this.props.state.board[x] === 'O'){
                arrOfBoxes.push(<div className="square" key={x} id={x}><p>O</p></div>)
            }else if (this.props.state.board[x] === ''){
                arrOfBoxes.push(<div className="square" key={x} id={x} onClick={update}></div>)
            }
            
        }
    }//end else
    

    return (
        <div className="container">
            {arrOfBoxes}
            {plays}
        </div>
      
    );
  }
}
export default Square;