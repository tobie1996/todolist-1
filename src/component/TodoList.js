import React from 'react';
import { useMatch } from 'react-router-dom';
import './ToDo'
import ToDo from './ToDo';

const TodoList = ({ tasks,onToggleCompleted }) => {
  let filteredTasks

  switch (useMatch.params) {
    case "completed":
     filteredTasks = tasks.filter(task => task.completed);
      
     break;
    default:

     filteredTasks = tasks;
   }

  if (filteredTasks.length === 0) {
    return (
      <div>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className='list-group m-3'>
          <li className='list-group-item'>Aucune tâche à afficher</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className='list-group m-3'>
          {
            filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted ={onToggleCompleted}/>)
          }
        </ul>
      </div>
    );
  }
};

export default TodoList;
