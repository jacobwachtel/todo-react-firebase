import React from 'react';
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';
import { useState, useEffect } from 'react'
import { onSnapshot, collection, doc } from 'firebase/firestore';
import db from '../utils/firebase';
import store from '../redux/store';
import { auth } from '../utils/firebase'


const Dashboard = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filterStatus, setFilterStatus] = useState("all")
    const [user, setUser] = useState(null)

    // Gathers Todo List from Firebase
    // useEffect(() => {
    //     const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
    //       let todos = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})
    //       );
    //       setFilteredTasks(todos);
    //       setTasks(todos);
    //     });
    //     return unsub
    //   },[])

    useEffect(() => {
      // Gets Current User Signed In
      auth.onAuthStateChanged((currentUser) => {
        if(currentUser) {
          setUser(currentUser.uid);
        }
        else{
          console.log("ERROR PLEASE SIGN IN");
        }
      })
      // Grab User's Tasks
        const unsub = onSnapshot(doc(db, 'users', `${user}`), (snapshot) => {
        let todos = snapshot.data().tasks
        setFilteredTasks(todos);
        setTasks(todos);
        console.log(snapshot.data().tasks)
      })
      return unsub
    },[user])
    
      // Filters todo's whether they are All | Active | Completed 
      useEffect(()=> {
        const handleFilter = () => {
          if(filterStatus === "active") {
            setFilteredTasks(tasks.filter((task)=> task.status === false))
          }
          else if(filterStatus === "completed") {
            setFilteredTasks(tasks.filter((task)=> task.status === true))
          }
          else {
            setFilteredTasks(tasks)
          }
        }
    
        handleFilter()
      },[tasks,filterStatus])

  return (
    <div className="App"> 
        <div className='container'>

            <div className='header'>
            <h1>TODO</h1>
            <img src='./images/icon-sun.svg' alt='sun'/>
            </div>

            {/* Form Input Component for Todos */}
            <TaskInput tasks = {tasks} setTasks = {setTasks} user={user}/>

                {/* Todo List Component */}
            <TaskList 
                tasks = {tasks}
                setTasks = {setTasks}
                filterStatus = {filterStatus}
                setFilterStatus = {setFilterStatus}
                filteredTasks = {filteredTasks}
                userId={user}
            />
        </div>
  </div>
  
  )
}

export default Dashboard