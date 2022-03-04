import React from 'react';
import FilterControl from './FilterControl';
import Task from './Task';

const TaskList = () => {
   return (
      <div className="task-list-wrapper">
         <div className="task-list">
            <Task />
            <Task />
            <Task />
            <Task />
            {/* Map through all the tasks */}
         </div>

         <div className="task-items-info">
            <div className="items-left">5 Items Left</div>
            <FilterControl />
         </div>
      </div>
   );
};

export default TaskList;
