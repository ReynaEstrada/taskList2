import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from './Task';
import '../css/taskList.css';



function TaskList() {
    const [tasks, setTasks] = useState([]);
    const addTask = task => {
      if (task.text.trim()){
        task.text = task.text.trim();
        const taskUpdates = [task, ...tasks];
        setTasks(taskUpdates)
      }
    }    
    const deleteTask = id =>{
        const taskUpdates = tasks.filter(task => task.id !== id);
        setTasks(taskUpdates);
    }
    const taskCompleted = id =>{
        const taskUpdates  = tasks.map(task => {
            if (task.id ===id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(taskUpdates);
    }
    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='list-task-container'>
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            taskCompleted={taskCompleted}
                            deletedTask={deleteTask} 
                        />    
                    )
                }
            </div>
        </>
    );
}

export default TaskList;