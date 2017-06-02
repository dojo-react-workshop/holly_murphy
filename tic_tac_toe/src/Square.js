import React, { Component } from 'react';
import square from './square.css'

class Square extends Component {
  render() {

    let letter = this.props.xOrO
    let arrOfBoxes = []
    const update = (e)=>{
        this.props.updateXOrO(e.target.id)
    }

    // do check if game is over
    const checkWinner = () =>{
        let winnerArray = []
        let condOne, condTwo, condThree, condFour, condFive, condSix, condSeven, condEight 

        winnerArray.push(condOne = winner(0,1,2))
        winnerArray.push(condTwo = winner(3,4,5))
        winnerArray.push(condTwo = winner(6,7,8))
        winnerArray.push(condTwo = winner(0,3,6))
        winnerArray.push(condTwo = winner(1,4,7))
        winnerArray.push(condTwo = winner(2,5,8))
        winnerArray.push(condTwo = winner(0,4,8))
        winnerArray.push(condTwo = winner(2,4,6))

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
    if(this.props.board[iOne] ==='O'){
      oCount += 1
    }else if(this.props.board[iOne]==='X'){
      xCount +=1
    }

    if(this.props.board[iTwo] ==='O'){
      oCount += 1
    }else if(this.props.board[iTwo]==='X'){
      xCount +=1
    }

    if(this.props.board[iThree] ==='O'){
      oCount += 1
    }else if(this.props.board[iThree]==='X'){
      xCount +=1
    }

    if(xCount === 3){
      return 'X'
    }else if(oCount === 3){
      return 'O'
    }
    return 'no winner'
  }//end of winner


    if(checkWinner() === 'X' || checkWinner() === 'O'){
        arrOfBoxes.push(<div className="winner">{checkWinner()} Won!</div>)
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