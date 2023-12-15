import React from 'react'
import NavBar from './NavBar';
import TodoList from './TodoList';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AddTask from './AddTask';
import initialData from '../initialData';
import './App.css'

class App extends React.Component{


  state = {
    tasks: initialData
  }

  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
    taskToUpdate.completed = !taskToUpdate.completed

    this.setState(prevState => {
      prevState.tasks.map(task => {
        return task.id === taskId? taskToUpdate:task
      })
    })
  }

  render(){
    return (
      <section id="todo">
          <BrowserRouter>
              <Routes>
                <Route path='/add-task' Component={AddTask}/>
                <Route path="/:filter?" Component={(props) =><TodoList {...props} tasks ={initialData} onToggleCompleted ={this.onToggleCompleted}/> } />
              </Routes>
              <NavBar/>
          </BrowserRouter> 
    </section>
    )

  }
}

export default App