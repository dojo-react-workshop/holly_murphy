import React, { Component } from 'react'
import Title from './Title'
import './App.css'
import './display.css'

class Display extends Component{

    state={
        newItem: ''
    }

    handleClick = (e) => {
        this.props.handleClick(e)
    } 

    selectIndex = (index) =>{
        this.props.selectIndex(index)
    }

    updateNewItem = (e) => {
        let text = e.target.value
        this.setState((prev) => {
            let newstate = { ...prev }
            newstate.newItem=text
            return newstate
        })
    }

    addNewItem = () => {
        this.props.addNewItem(this.props.state.selectedTab, this.state.newItem)
    }

    render(){
    let liDisp=this.props.state.tabs[this.props.state.selectedTab].listOfItems.map((val, ind) => {
        if(val==='default'){
            return <div key={ind}></div>
        }else{
            return <li key={ind}>{val}</li>
        }
    })

    return(
        
        <div>
            <div className='row'><Title state={this.props.state} handleClick={this.handleClick} selectIndex={this.selectIndex} /></div>
            <div className='row' id='list_disp'>
                <div className='medium-28 col'>
                    <ul>
                        {liDisp}
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='medium-15 col'>
                    <input type="text" value={this.state.newItem} onChange={this.updateNewItem} />
                </div>
                <div className='medium-9 col'>
                    <label className='label small secondary' onClick={this.addNewItem} >Add New</label>
                </div>
            </div>
        </div>
    )
  }
}

export default Display