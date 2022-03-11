import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../utils/firebase';


export const TaskInput = ({tasks,setTasks}) => {

    const [input, setInput] = useState("")


    const handleChange = (e)=> {
      setInput(e.target.value)
    }

    const handleForm = async (e) => {
        e.preventDefault();

        if(input) {
            const collectionRef = collection(db, 'tasks');
            const payload = {
                text: input.trim(),
                status: false
            }

            await addDoc(collectionRef, payload);
            setInput('');
        }
    }

  return (
    <div className='task-input'>
        <div className= 'check'>
            <div className='check-mark'>
                {/* insert image here */}
            </div>
        </div>
        <div className='new-todo-input'>
            <form onSubmit={handleForm}>
                <input onChange={handleChange} value={input} id='todo-input' type="text" placeholder='Create a new todo...' />
            </form>
        </div>
  </div>
  )
}
