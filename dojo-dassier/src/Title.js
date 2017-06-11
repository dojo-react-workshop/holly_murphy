import React, { Component } from 'react'

class Title extends Component{

    selectIndex=(e)=>{
        console.log(`selectedIndex: `, e.target.id)
       this.props.selectIndex(e.target.id)
   }
    
    render(){
        let disp=this.props.state.tabs.map((val, ind, arr)=>{
        console.log(`state in title: `,this.props.state)
        console.log(`selectedTab: `, this.props.state.selectedTab)
       if(this.props.state.selectedTab === ind){
            return <li key={val.id} className='filter-nav-entry active'><button id={val.id}>{val.name}</button></li>
       }else{
           return <li key={val.id} className='filter-nav-entry'><button id={val.id} onClick={this.selectIndex} >{val.name}</button></li>
       }
   })

    return(
        <div>
            <ul className='filter-nav'>
                {disp}
            </ul>
        </div>
    )
  }
}

export default Title