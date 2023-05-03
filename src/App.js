
import './App.css';
import { useState } from 'react';
import Task from "./Task"

function App() {
  const[todoList,setTodoList]=useState([]);  
  // since it is a list ,so we are using[]
  const [newTask,setNewTask]=useState("");
  // newTask will be a string, so we are giving 
  const handleChange = (event)=>{
    setNewTask(event.target.value)
  }
  const addTask=() =>{
    const task={
      id : todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1,
      taskName:newTask,
      completed:false,   
    }
    // once we click on complete only,it will be true,initially it will be false
    setTodoList([...todoList,task])
  }
  const deleteTask=(id) =>{
    setTodoList(todoList.filter((task)=>task.id !== id));
  }
  const completeTask=(id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id === id){
          return{...task,completed:true}
        } else {
          return task;
        }
      })
    )
  }
  return (
    <div className="App">
      <div className='addTask'>
        <p id="ptodo">TODO LIST</p>
        <input placeholder = "Write your todo list..."  onChange={handleChange}/>
        <button id="badd" onClick={addTask}>Add Task</button>
        </div>
        <p id="listp">List of works</p>
        <div className='list'>
          {todoList.map((task)=>{
            return(
              <Task taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}/>
            )
          })}

        </div>
      
    </div>
    
  );
}

export default App;
