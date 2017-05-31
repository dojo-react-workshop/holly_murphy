import React from 'react';
import Rectangle from './Rectangle'
import './container.css'

 export class Container extends React.Component {

     state={
         rectangles:[
             {
              name: 'React',
              count: 0
            },
            {
              name: 'Redux',
              count: 0
            },
            {
              name: 'Node',
              count: 0
            },
            {
              name: 'Express',
              count: 0
            }
         ]
     }
                
    headStyle={
        textAlign: 'center',
        color: 'white'
    }

    incCount=(name)=>{
        this.setState((prevState)=>{
            prevState.rectangles.find(x => x.name === name).count++
         })
    }
    render=()=>{
        //sort array before mapping over
        let {rectangles} = this.state
        
        rectangles = rectangles.sort((a,b)=>{
            if(a.count < b.count){
                return 1
            }
            if(a.count > b.count){
                return -1
            }
            return 0
        })
        //map over in the render so that when the state is changed/updated, your display references the new order
        const rectangle = this.state.rectangles.map((val, ind)=>{
            //this.state.rectangles.push(<Rectangle rects={val} key={ind} />)
            return <Rectangle rects={val} key={ind} increment={this.incCount} />
        })

        return (
            <div>
                <h1>Vote Your JS Library!</h1>
                <div style={this.headStyle}>{rectangle}</div>
            </div>
        )
    }
 }
export default Container