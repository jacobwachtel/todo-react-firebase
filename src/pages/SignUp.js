import React, { useRef } from 'react'
import Login from '../components/Login'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { setDoc, doc } from 'firebase/firestore';
import db from '../utils/firebase';


const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then(async (cred) => {
                await setDoc(doc(db, 'users', `${cred.user.uid}`), {
                    tasks: [
                       
                    ]
                })
                if(cred) {
                    window.location = "/dashboard";
                }
            })            
        }
        catch(e) {
            alert(e.message)
        }
        
    }


  return (
    <div>
        <Login 
            title="Sign Up"
            button="Sign up"
            href="/"
            link="Sign in"
            headerStatement="Already have an account?"
            emailInput={emailRef}
            passwordInput={passwordRef}
            btnFunction={register}
        />
    </div>
  )
}

export default SignUp