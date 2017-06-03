import React, { Component } from 'react';
import './App.css';
import "./../node_modules/todomvc-app-css/index.css"
import TodoEntry from './TodoEntry'
import TodoList from './TodoList'
import BottomBar from './BottomBar'

class App extends Component {

    state={
        items: [
            { id: 1, text: "Learn React", completed: true, editable: false},
            { id: 2, text: "Build a todo app", completed: false, editable: false},
            { id: 3, text: "Profit", completed: false, editable: false}
        ],
        filter: 'All',
        displayTxt:'',
        completedToggle: false
    }

    //add a Todo list item
    addTodo=(txt)=>{
        this.setState((prev)=>{
            //create a new state obj and set equal to current state
            let newState = {}
            newState={...prev}

            //find the last id in the curr state to generate the next
            //if no items exist in the list, set id to 1
            if(newState.items.length===0){
              newState.items.push({
                id: 1,
                text: txt,
                completed: false
              })
            }else{
            newState.items.push({
                id: prev.items[prev.items.length-1].id + 1,
                text: txt,
                completed: false
            })
          }
          newState.displayTxt=''
            return newState
        })
    }

    //update a todo
    updateTodo=(txt, id)=>{
      this.setState((prev)=>{
        let newState = { ...prev } 
        let ind
        //find the index where the ids match
        ind = newState.items.findIndex((val,ind)=>{
          return val.id == id;
        })
        //update the text to the entered text and set the editable back to false
        newState.items[ind].text=txt
        newState.items[ind].editable=false

        return newState
      })
    }

    //remove a todo list item
    removeTodo =(id)=>{
      this.setState((prev)=>{
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

    //check an item as complete and cross out by updating completed to true for the appropriate id passed in
    //or vice versa

    makeComplete=(id)=>{
      this.setState((prev)=>{
        let newState={...prev};
        let ind;
        //find the index where the ids match
        ind = newState.items.findIndex((val,ind)=>{
          return val.id == id;
        })
        //check what it was and make it the opposite
        if(newState.items[ind].completed === true){
          newState.items[ind].completed = false;
        }else{
          newState.items[ind].completed = true;
        }
        return newState;
      })
    }
    //clear completed items (filter the completed items out of the list)
    clearCompleted=()=>{
      this.setState((prev)=>{
        let newState={...prev};
        newState.items=newState.items.filter((val)=>{
          return val.completed===false;
        })
        return newState;
      })
    }
     
      //filter list based on selection
      setFilter=(filt)=>{
        this.setState((prev)=>{
          let newState={...prev}
          newState.filter=filt
          return newState
        })//setState
      }//setFilter

      //mark all complete or incomplete
      markAllComplete=()=>{
        this.setState((prev)=>{
          let newState={ ...prev }
          if(newState.completedToggle === true){
            //update all items completed to false and completedToggle to false
            newState.items = newState.items.forEach((val)=>{
              return val.completed=false
            })//forEach
            newState.completedToggle=false
          }//if
          else{
            newState.items = newState.items.forEach((val)=>{
              return val.completed=true
            })//forEach
            newState.completedToggle=true
          }//else
          return newState
        })
      }

      makeEditable=(id)=>{
          this.setState((prev)=>{
          let newState={...prev};
          let ind;
          //find the index where the ids match
          ind = newState.items.findIndex((val,ind)=>{
            return val.id == id;
          })
          newState.items[ind].editable=true
          return newState;
          })
      }

      updateDisplayTxt=(txt)=>{
        this.setState((prev)=>{
          let newState={ ...prev }
          newState.displayTxt=txt

          return newState
        })
      }

      handleBlur=(id)=>{
        this.setState((prev)=>{
          let newState={ ...prev }
          let ind;
          ind=newState.items.findIndex((val)=>{
            return val.id==id;
          })
          newState.items[ind].editable=false

          return newState
          })          
      }



  render() {

      
    return (
      <section className='todoapp'>
        <div >
            <header className='header'><h1>todos</h1>
              <TodoEntry data={this.state} updateDisplayTxt={this.updateDisplayTxt} addTodo={this.addTodo} markAllComplete={this.markAllComplete} />
            </header>
            <TodoList handleBlur={this.handleBlur} makeEditable={this.makeEditable} data={this.state} updateTodo={this.updateTodo} removeTodo={this.removeTodo} makeComplete={this.makeComplete} />
           <BottomBar data={this.state} clearCompleted={this.clearCompleted} setFilter={this.setFilter}/>
        </div>
     </section>
    );
  }
}

export default App;
