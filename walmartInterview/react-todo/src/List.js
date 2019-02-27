import React, { Component } from 'react';


export default class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'List Views',
          count: 0,
          tasks: ['Example 1', 'Example 2', 'Example 3','Example 4','Example 5']
        }
      }
   
      handleClickIndex = (index, event)=>{
        eval(this[event.target.name]).bind(this)(index, event)
      }
    
      handleSubmit=(event)=>{
        event.preventDefault()
        eval(this[event.target.name]).bind(this)(event)
      }
      task=(event)=> {
        this.setState({task:event.target.value})
      }
      addTask=(event)=> {
        if (!this.state.task) return
        const tasks = this.state.tasks || []
        tasks.push(this.state.task)
        this.setState({tasks:tasks, task:''})
      }
      removeTask =(index, event)=> {
        const tasks = this.state.tasks
        tasks.splice(index, 1)    
        this.setState({tasks})
      }
      render(){
        const tasks = (this.state.tasks||[]).map((task,index)=>(
          <li>
            {task} <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>x</button>
          </li>
        ))
        return (
          <div>
            <h3>{this.state.name}</h3>
            <div>
              <ol>
                {tasks}
                {
                  this.state.task &&
                  <li>{this.state.task}</li>
                }
              </ol>
            </div>
          </div>
        )
      }
    }
    