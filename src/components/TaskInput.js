import React from 'react';

const TaskInput = () => {
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
            <form>
               <input
                  id="todo-input"
                  type="input"
                  placeholder="Create a new todo..."
               />
            </form>
         </div>
      </div>
   );
};

export default TaskInput;
