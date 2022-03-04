import React, { useState, useRef } from 'react';
import TaskList from './TaskList';




const TaskInput = ({setTasks, tasks}) => {

   const [input, setInput] = useState('')

   const handleChange = (e) => {
      setInput(e.target.value)
   }

   const handleForm = (e) => {
      e.preventDefault();

      const generateID = (array) => {
         let IDs = array.map((item) => item.id)
         return Math.max(...IDs) + 1
      }

      const newTask = {
         id: generateID(),
         text: input,
         status: false
      }
      setTasks([...tasks, newTask])
      

   }
   

   return (
      <div className="task-input">
         <div className="check">
            <img
               className="check-mark"
               src="./images/icon-check.svg"
               alt="checkbox icon"
            />
         </div>
         <div className="new-todo-input">
            <form onSubmit={handleForm}>
               <input
                  id="todo-input"
                  
                  onChange={handleChange}
                  type="input"
                  placeholder="Create a new todo..."
               />
            </form>
         </div>
      </div>
   );
};

export default TaskInput;
