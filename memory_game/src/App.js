import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import Box from './Box'

class App extends Component {
  state={
    //plain board
    lit:[false,false,false,false,false,false,false,false,false,false,false,false],
    //holds board with one light at a time
    toLight: [false,false,false,false,false,false,false,false,false,false,false,false],
    //saved random generated lit sequence
    litSequence:[],
    //user selected sequence
    userSelection:[],
    gameState:'start',
    secondsRemaining:0,
    litSecondsRemaining:0,
    playerStatus: ''
  }
    
    //updates secondsRemaining
    tick = ()=>{
        if (this.state.secondsRemaining <= 0) {
          clearInterval(this.interval)
          this.startLightTimer()
        }else{
          this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        }
    }

    //light a box
    light=()=>{
      if(this.state.litSecondsRemaining <= 0){
        clearInterval(this.interval)
        this.setState((prev)=>{
          let newState={ ...prev }
          newState.gameState='waitForPlayer';
          newState.toLight=[false,false,false,false,false,false,false,false,false,false,false,false];
          return newState;
        })
      }
      else{
      let rand=Math.floor(Math.random()*11)+0
      this.setState((prev)=>{
        let newState = { ...prev }
        newState.toLight = Array.from(newState.lit)
        // loop through and set the rand determined box to true
        for(let x=0; x<newState.toLight.length; x++){
          if(x === rand){
            newState.toLight[x] = true
          }//if
        }//for
        newState.litSequence.push(rand)
        newState.litSecondsRemaining=newState.litSecondsRemaining-1
        return newState
      })//setState
      }
    }//light()

    startLightTimer=()=>{
      this.setState((prev)=>{
        let newState= { ...prev }
        newState.litSecondsRemaining=4;
        this.interval = setInterval(this.light,500);
        return newState
      })
    }

    //startTimer will set the interval to 3 seconds and will call tick to reset the state which will cause a render()
    startTimer=()=>{
        this.setState((prev)=>{
          let newState = { ...prev }
          newState.secondsRemaining=3;
          newState.gameState= 'inProgress';
          this.interval = setInterval(this.tick,1000);
          return newState;
        })
    }

    //this function pushes the ID of the box the player touched to an array
    recordTouch=(id)=>{
      this.setState((prev)=>{
        let newState = { ...prev };
                
        //check if the user selection is the last one available for the user
        if(newState.userSelection.length === newState.litSequence.length-1){
          newState.userSelection.push(id);
          newState.gameState='playAgain'
          //check if the user was correct
          let flags=[]
          for(let x=0; x<newState.litSequence.length; x++){
            if(newState.litSequence[x] == newState.userSelection[x]){
              flags.push(true)
            }else{
              flags.push(false)
            }
          }//end for
          let ind = flags.findIndex((val)=>{
            return val===false
          })
          if(ind<0){
            newState.playerStatus = 'Winner';
            newState.toLight=[false,false,false,false,false,false,false,false,false,false,false,false];
            newState.litSequence=[];
            newState.userSelection=[];
          }else{
            newState.playerStatus = 'Loser';
            //and clear the board to restart game
            //plain board
            newState.toLight=[false,false,false,false,false,false,false,false,false,false,false,false];
            newState.litSequence=[];
            newState.userSelection=[];
          }
          //if it wasn't the last selection, allow the user to continue selecting
        }else{
          newState.userSelection.push(id);
          newState.toLight[id]=true
        }

        return newState;
      })

    }


  render() {
    let disp=''

      if(this.state.gameState === 'start'){
        disp=<button type='button' className="btn btn-primary" onClick={this.startTimer}>Start Game</button>
      }else if(this.state.gameState === 'inProgress'){
          disp=<div>Seconds Remaining: <span className='bold'>{this.state.secondsRemaining}</span></div>
      }else if(this.state.gameState === 'playAgain'){
          disp=(<div><button type='button' className="btn btn-primary" onClick={this.startTimer}>Play Again</button>
          <p>You are a {this.state.playerStatus}!</p></div>)
      }else if(this.state.gameState === 'playing'){
          disp=<div>Guess the correct cells!</div>
      }else if(this.state.gameState === 'waitForPlayer'){
          disp=<div>Guess the correct cells!</div>
      }

    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Box data={this.state} recordTouch={this.recordTouch} />
        <div>{disp}</div>
        {/*<div><BottomBar data={this.state.gameState} countDown={this.countDown} /></div>*/}
      </div>
    );
  }
}

export default App;