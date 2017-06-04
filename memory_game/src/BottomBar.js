import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './bottomBar.css'

class BottomBar extends Component {
    state={
        secondsRemaining: 0
    }
    tick = ()=>{
        this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
    }
    //invoked immediately after a component is mounted. triggers a rerendering
    componentWillMount=()=>{
        this.setState({secondsRemaining: 4})
        this.interval = setInterval(this.tick, 1000);
    }
    //invoked immediately before a component is unmounted and destroyed
    componentWillUnmount=()=>{
        clearInterval(this.interval);
    }
  render() {
      let disp=''
      let counter=3

      if(this.props.data === 'start'){
        disp=<button type='button' className="btn btn-primary" onClick={this.props.countDown}>Start Game</button>
      }else if(this.props.data === 'inProgress'){
          disp=<div>Seconds Remaining: <span className='bold'>{this.state.secondsRemaining}</span></div>
      }else if(this.props.data === 'playAgain'){
          disp=<button type='button' className="btn btn-primary" onClick={this.props.countDown}>Play Again</button>
      }
      
    return (
      <div className="BottomBar">
        {disp}
      </div>
    );
  }
}

export default BottomBar;