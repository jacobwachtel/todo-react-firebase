import React, { useState } from 'react'
import Check from '../images/icon-check.svg';
import { setDoc, doc } from 'firebase/firestore';
import db from '../utils/firebase';


export const Task = ({text, task,tasks, setTasks, userId}) => {

  
  const [mutableTask, setMutableTask] = useState(task)

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? (<img src={Check} alt="completed"/>) : "";


  const markCompleted = () => {
    
    // This updates the status on our FrontEnd
    setMutableTask({...mutableTask, status: !mutableTask.status }) 

    // setDoc(doc(db, 'tasks', mutableTask.id), {status: !mutableTask.status}, { merge: true})
  
    const docRef = doc(db, "users", userId)
    const arrayRef = tasks;
    if(tasks.length > 0){
      const index = tasks.indexOf(task)
      arrayRef[index] = {...task, status: ! task.status}
   
      const payload = {
        tasks: arrayRef
      }
      setDoc(docRef, payload)
    }
    
  }

  return (
    <div className='task-item'>
        <div className='check' onClick={markCompleted}>
            <div className={`check-mark ${checked}`}>
              {checkIcon}
            </div>
        </div>

        <div className={`task-text ${checked}`}>
            <p>{text}</p>
        </div>
    </div>
  )
}
