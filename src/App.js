import { useState, useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


const data = [
   { id: 1, text: "Finish contacts hw", status: true },
   { id: 2, text: "Study react hooks", status: false },
   { id: 3, text: "Finish Clever programmer challenge", status: false },
   { id: 4, text: "Run 1 mile", status: false },
   { id: 5, text: "Finish errands", status: false },
   { id: 6, text: "Complete Todo App", status: true },
 ];

function App() {

   const [tasks, setTasks] = useState(data)
   const [filterStatus, setFilterStatus] = useState('all')

   useEffect(() => {
      const handleFilter = () => {
         if(filterStatus === "active"){
            setTasks(tasks.filter(task => task.status === true))
         }
         else if(filterStatus === "completed"){
            setTasks(tasks.filter(task => task.status === false))
         }
         else {
            return setTasks(tasks)
         }
      }
   },[filterStatus])

   return (
      <div className="App">
         <div className="container">
            <div className="header">
               <h1>TODO</h1>
               <img src="./images/icon-sun.svg" alt="sun icon" />
            </div>

            <TaskInput setTasks={setTasks} tasks={tasks}/>

            <TaskList tasks={tasks} setTasks={setTasks} filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
         </div>
      </div>
   );
}

export default App;
