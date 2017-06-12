import React, { Component } from 'react'
import { connect } from 'react-redux'

class Title extends Component{

    selectIndex=(e)=>{
       this.props.selectIndex(e.target.id)
   }

    render(){
        let disp=this.props.tabs.map((val, ind, arr)=>{
            console.log(`selected tab: `, this.props.selectedTab)
            console.log(`index: `, ind)
       if(this.props.selectedTab === ind){
            return <li key={val.id} className='filter-nav-entry active'><button id={val.id}>{val.name}</button></li>
       }else{
           return <li key={val.id} className='filter-nav-entry'><button id={val.id} onClick={this.selectIndex} >{val.name}</button></li>
       }
   })

    return(
        <div>
            <ul className='filter-nav'>
                {/*{this.props.tabs.map((val,ind,arr)=>{
                    return <li key={ind} className='filter-nav-entry'><button id={val.id}>{val.name}</button></li>
                })}*/}
                {disp}
            </ul>
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
    return{
        selectIndex: (id) => {
            dispatch({
                type:'UPDATE_SELECTED_TAB',
                id: id
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Title)
