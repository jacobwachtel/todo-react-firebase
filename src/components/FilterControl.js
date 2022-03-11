import React from 'react'

export const FilterControl = ({setFilterStatus, tasks}) => {
  
  const all = () => {
    return tasks.length;
    
  }

  const allActive = () => {
    let count = 0;
    tasks.forEach(task => {
      if(!task.status){
        count++
      }
    })
    return count
  }

  const allCompleted = () => {
    let count = 0;
    tasks.forEach(task => {
      if(task.status){
        count++
      }
    })
    return count
  }

  const handleStatus = (status) => {
    setFilterStatus(status)
  } 

  return (
    <div className='items-statuses'>
        <span className='status' onClick={()=>handleStatus("all")}>
        All (<span className='count'>{all()}</span>)
        </span>
        <span className='status' onClick={()=>handleStatus("active")}>
        Active (<span className='count'>{allActive()}</span>)
        </span>
        <span className='status' onClick={()=>handleStatus("completed")}>
        Completed (<span className='count'>{allCompleted()}</span>)
        </span>
    </div>
  )
}

