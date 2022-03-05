import React from 'react';
import FilterControl from './FilterControl';
import Task from './Task';

const TaskList = ({tasks, setTasks, filterStatus, setFilterStatus}) => {
   console.log(tasks);
   return (
      <div className="task-list-wrapper">
         <div className="task-list">
            {tasks.map((task) => {
               return <Task 
                  key={task.id}
                  text={task.text}
                  status={task.status}
                  tasks={tasks}
                  task={task}
                  setTasks={setTasks}
               />
})}
         </div>

         <div className="task-items-info">
            <div className="items-left">5 Items Left</div>
            <FilterControl filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
            <div className='items-clear'>
               Something
            </div>
         </div>

      </div>
   );
};

export default TaskList;
