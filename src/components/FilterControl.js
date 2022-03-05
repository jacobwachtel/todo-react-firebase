import React from 'react';

const FilterControl = ({filterStatus, setFilterStatus}) => {

   

   const handleStatus = (status) => {
      setFilterStatus(status)
   }
   return (
      <div className="item-statuses">
         <span onClick={() => handleStatus('all')}>All</span>
         <span onClick={() => handleStatus('active')}>Active</span>
         <span onClick={() => handleStatus('completed')}>Completed</span>
      </div>
   );
};

export default FilterControl;
