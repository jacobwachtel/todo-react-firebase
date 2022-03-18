import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import db from '../utils/firebase';
import store from '../redux/store';




export const TaskInput = ({tasks,setTasks, user}) => {

    const [input, setInput] = useState("")

    const generateId = (array) => {
        // This variable should hold an array of all the ids

        if(array.length === 1 ){
            return 0
        } else {
            const taskIDs = array.map((item)=> item.id)
            return Math.max(...taskIDs) + 1
        }        
    }


    const handleChange = (e)=> {
      setInput(e.target.value)
    }
    

    const handleForm = async (e) => {
        e.preventDefault();

        if(input) {
            const docRef = doc(db, 'users', user);

            const newTask = {
                text: input.trim(),
                status: false,
                id: generateId(tasks),
            }
            let tasksRef = tasks
            tasksRef.push(newTask)

            const payload = {
                tasks: tasksRef
            }
            await setDoc(docRef, payload);          
            

            

            // const unsubscribe = store.subscribe(() => {
            //     console.log('store changed!', store.getState());
            // })
            // store.dispatch(
            //     taskAdded(input)
            // )

            // console.log(store.getState());

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
