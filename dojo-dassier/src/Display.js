import React, { Component } from 'react'
import Title from './Title'
import './App.css'
import './display.css'
import { connect } from 'react-redux'

class Display extends Component{

    state={
        newItem: ''
    }

    // selectIndex = (index) =>{
    //     this.props.selectIndex(index)
    // }

    updateNewItem = (e) => {        
        let text = e.target.value
        this.setState((prev) => {
            let newstate = { ...prev }
             newstate.newItem=text
            return newstate
         })
    }

    addNewItem = () => {
        //this.props.addNewItem(this.props.state.selectedTab, this.state.newItem)
        console.log(`in add-new-item`, this.props)
        console.log(`new item`, this.state.newItem)
        console.log(`addNewItem: `, this.props.addNewItem)
        this.props.addNewItem(this.props.selectedTab,this.state.newItem)
    }

    render(){
        //console.log(`props.getstate: `, this.props.getState())
        console.log(`in display; props: `, this.props)
    let liDisp=this.props.tabs[this.props.selectedTab].listOfItems.map((val, ind) => {
        if(val==='default'){
            return <div key={ind}></div>
        }else{
            return <li key={ind}>{val}</li>
        }
    })

    return(
        
        <div>
            <div className='row'><Title /></div>
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

const mapStateToProps = (state) => {
    return {
        tabs: state.tabs,
        selectedTab: state.selectedTab
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(`in mapDispatchToProps`, dispatch)
    return{
        addNewItem: (index,item) => {
            dispatch({
                type:'ADD_ITEM',
                id: index,
                item: item
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Display)
