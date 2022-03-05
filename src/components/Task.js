import React, { useState } from 'react';
import Check from '../images/icon-check.svg'

const Task = ({text, status, tasks, task, setTasks}) => {

      const [mutableTask, setMutableTask] = useState(task)

      
      const checked = mutableTask.status ? "checked" : '';
      const checkIcon = mutableTask.status ? (<img src={Check} alt="completed" />) : "";

      const markCompleted = () => {
         setMutableTask({...mutableTask, status: !mutableTask.status })   
         
         const updatedTasks = tasks.map((item) => {
            return item.id === mutableTask.id ? item = mutableTask : item
         })
         setTasks(updatedTasks);
      };

   return (
      <div className="task-item">
         <div className="check" onClick={markCompleted}>
            <div className={`check-mark ${checked}`}>
               {checkIcon}
            </div>
         </div>
         <div className={`task-text ${checked}`}>
            <p>{text}</p>
         </div>
      </div>
   );
};

export default Task;
