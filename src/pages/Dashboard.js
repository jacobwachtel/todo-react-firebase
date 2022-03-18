import React from 'react';
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';
import { useState, useEffect } from 'react'
import { onSnapshot, collection, doc } from 'firebase/firestore';
import db from '../utils/firebase';
import store from '../redux/store';
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth';


const Dashboard = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filterStatus, setFilterStatus] = useState("all")

    const [user, setUser] = useState({})

    const logout = async () => {
      await signOut(auth)
      window.location= '/'
    }

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
          // Keeps track of current user
          setUser(currentUser.uid);
        }
        else{
          console.log("ERROR PLEASE SIGN IN");
          window.location = "/"
        }
      })

      
      // Grab User's Tasks
        const unsub = onSnapshot(doc(db, 'users', `${user}`), (snapshot) => {
        let todos = snapshot.data().tasks
          console.log(todos);
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
            {filteredTasks && <TaskList 
                tasks = {tasks}
                setTasks = {setTasks}
                filterStatus = {filterStatus}
                setFilterStatus = {setFilterStatus}
                filteredTasks = {filteredTasks}
                user={user}
            />
}
        </div>
        <h3 onClick={logout}>Logout</h3>
  </div>
  
  )
}

export default Dashboard