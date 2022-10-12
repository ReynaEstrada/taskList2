import React from "react";
import '../css/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


function Task({id, text, completed, taskCompleted, deletedTask}) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className='task-text'
        onClick={() => taskCompleted(id)}>
        {text}
      </div>
      <div 
        className='task-container-icons'
        onClick={() => deletedTask(id)}>
        <AiOutlineCloseCircle  className='task-icon' />
      </div>
    </div>
  )
}

export default Task;