import React from 'react'
import { FilterControl } from './FilterControl'
import { Task } from './Task'
import { deleteDoc, doc } from 'firebase/firestore';
import db from '../utils/firebase';



export const TaskList = ({tasks, setTasks, setFilterStatus, filteredTasks, user}) => {

  const clearCompleted = ()=> {
    //Clear's Tasks by filtering out
   
    tasks.forEach(task => {
      if(task.status){
        // const docRef = doc(db, "users", user)
        
        // deleteDoc(docRef, task.id)
      }
    })   
    
    // Reset the filterStatus to all
      setFilterStatus("all")
  }




  return (
    
    <div className='task-list-wrapper'>
        <div className='task-list'>
            {filteredTasks.map((task)=> {
                console.log(task)
                return <Task 
                    text = {task.text}
                    status = {task.staus}
                    tasks = {tasks}
                    setTasks = {setTasks}
                    task = {task}
                    key = {task.id}
                    userId={user}
                    />
            })}

        </div>

        <div className='task-items-info'>
            <div className='items-left'>
                {/* {tasks.length} items left */}
            </div>

            <FilterControl 
                setFilterStatus = {setFilterStatus}
                tasks={tasks}
            />

            <div className='items-clear'>
                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>
            
    </div>

  
  )
}
