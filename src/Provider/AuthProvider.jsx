import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";
import {  onAuthStateChanged,signOut } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user,setUser]= useState(null);
const createUser = (email,password) => {

 return  createUserWithEmailAndPassword (auth, email, password)
  
};
useEffect(()=>{
 
const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
});

return ()=>{
  
    unSubscribe();

}
},[]);
const signInUser = (email,password) =>{

    return signInWithEmailAndPassword(auth, email, password)
  
};
const logOut = () => {
    return signOut(auth);
  };
const authData={
    user,
    setUser,
    createUser,
    signInUser,
    logOut,
};


    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;