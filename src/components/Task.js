import React from 'react';

const Task = ({text, status}) => {
   return (
      <div className="task-item">
         <div className="check">
            <div className="check-mark">
               {status === true ? <img
                  className="check-mark"
                  src="./images/icon-check.svg"
                  alt="checkbox icon"
               /> : null}
            </div>
         </div>
         <div className="task-text">
            <p>{text}</p>
         </div>
      </div>
   );
};

export default Task;
