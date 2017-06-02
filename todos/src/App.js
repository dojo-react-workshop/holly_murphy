import React, { Component } from 'react';
import './App.css';
import "./../node_modules/todomvc-app-css/index.css"
import TodoEntry from './TodoEntry'
import TodoList from './TodoList'
import BottomBar from './BottomBar'

class App extends Component {

    state={
        items: [
            { id: 1, text: "Learn React", completed: true},
            { id: 2, text: "Build a todo app", completed: false},
            { id: 3, text: "Profit", completed: false}
        ],
        filter: 'all',
        newTodoText:''
    }

    //add a Todo list item
    addTodo=(txt)=>{
        this.setState((prev)=>{
            //create a new state obj and set equal to current state
            let newState = {}
            newState={...prev}

            //find the last id in the curr state to generate the next
            newState.items.push({
                id: prev.items[prev.items.length-1].id + 1,
                text: txt,
                completed: false
            })
            return newState
        })
    }

    //update a todo
    updateTodo=(txt, id)=>{
      this.setState((prev)=>{
        let newState = {} 
        newState = {}
        newState={...prev}

       // newState.items[id-1].text = txt

        return newState
      })
    }

    //remove a todo list item
    removeTodo =(id)=>{
      this.setState((prev)=>{
        console.log(`splice: ${id-1}`)
        let newState = {} 
        let ind;
        newState = {}
        newState={...prev}
        //find the index where the ids match
        ind = newState.items.findIndex((val,ind)=>{
          return val.id == id;
        })
        //remove the matching item
        newState.items.splice(ind,1)

        return newState
      })
    }



  render() {

      
    return (
      <section className='todoapp'>
        <div >
            <header className='header'><h1>todos</h1></header>
            <section className='todoapp'><TodoEntry addTodo={this.addTodo} /></section>
            <TodoList data={this.state} updateTodo={this.updateTodo} removeTodo={this.removeTodo} />
           <BottomBar />
        </div>
     </section>
    );
  }
}

export default App;
