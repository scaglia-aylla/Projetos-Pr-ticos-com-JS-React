
import "./index.css"
import Navbar from "./components/navbar/Navbar"
import Tasklist from "./components/tasklist/Tasklist"
import { useState } from "react"



let idTarefa = 0;
const generateId = () => {
  idTarefa = idTarefa + 1;
  return idTarefa
}

export default function App(){
  const [tasks, setTasks] = useState([]);
  
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    }
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if(task.id === id){
          return{...task, title, state};
        }else {
          return task;
        }
      })
    })
  }
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };


  return(
    <div className="App" id="app">
      <Navbar/>
      <div className="container">
        <Tasklist 
        title="Pendente"  
        onAddTask={addTask} 
        taskState="Pendente"
        tasks={tasks.filter((t) => t.state === "Pendente")} 
        onTaskUpdate={updateTask} 
        onDeleteTask={deleteTask}
        />

        <Tasklist 
        title="Fazendo"  
        onAddTask={addTask}
        taskState="Fazendo" 
        tasks={tasks.filter((t) => t.state === "Fazendo")} 
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask} 
        />
        <Tasklist 
        title="Completa"  
        onAddTask={addTask}
        taskState="Completa" 
        tasks={tasks.filter((t) => t.state === "Completa")} 
        onTaskUpdate={updateTask} 
        onDeleteTask={deleteTask}
        />
      </div>
      
    </div>
  )
}
