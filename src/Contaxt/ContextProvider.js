import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init';


export const AuthContex = createContext()

const auth = getAuth(app)
const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState('true')


    const signup =(email, password)=>{
      setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password)=>{
      setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
     return signOut(auth)
    }ri

    useEffect(()=>{
      const unsubscrib =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unsubscrib()
    }, [])

    const authInfo = {user, loading, setLoading, setStatus, status, signup, logout, login}
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default ContextProvider;