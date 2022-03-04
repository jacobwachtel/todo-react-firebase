import React from 'react';

const Task = () => {
   return (
      <div className="task-item">
         <div className="check">
            <div className="check-mark">
               <img
                  className="check-mark"
                  src="./images/icon-check.svg"
                  alt="checkbox icon"
               />
            </div>
         </div>
         <div className="task-text">
            <p>Finish the Front-end</p>
         </div>
      </div>
   );
};

export default Task;
