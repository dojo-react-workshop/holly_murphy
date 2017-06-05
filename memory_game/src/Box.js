import React, { Component } from 'react';
import './box.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Box extends Component {

    //this is to pass the id of the box the user selected to record their pattern
    recordTouch=(e)=>{
        this.props.recordTouch(e.target.id)
    }

  render() {
      let boxes=[]
      if(this.props.data.gameState==='waitForPlayer'){
        for(let x=0; x<this.props.data.toLight.length; x++){
            if(this.props.data.toLight[x] === true){
                boxes.push(<div key={x} id={x} className='player_selected' onClick={this.recordTouch}></div>)
            }else{
                boxes.push(<div key={x} id={x} className='box' onClick={this.recordTouch}></div>)
            }
             
        }
      }else if(this.props.data.gameState==='playAgain'){
          for(let x=0; x<this.props.data.toLight.length; x++){
             boxes.push(<div key={x} id={x} className='box'></div>)
        }
      }
      else{
        for(let x=0; x<this.props.data.toLight.length; x++){
          if(this.props.data.toLight[x] === true){
              boxes.push(<div key={x} className='lit_box'></div>)
          }else{
             boxes.push(<div key={x} className='box'></div>)
          }
        }
      }
      
    return (
      <div className="Box">
        {boxes}
      </div>
    );
  }
}

export default Box;