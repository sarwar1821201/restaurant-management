import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export  const AuthContext= createContext(null)
  
  const auth= getAuth(app)

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   const signUp = (email,password) => {
    setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
   }

   const signIn= (email,password) => {
     setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () =>{
     setLoading(true)
     return signOut(auth)
   }

    const userUpdateProfile= (name,photo) => {
     return  updateProfile (auth.currentUser , {
            displayName: name, photoURL: photo
        } )
    }


    useEffect( ()=> {
      const unsubscribe= onAuthStateChanged( auth, currentUser => {
              setUser(currentUser)

              setLoading(false)
         }  )
       return () => {
         return unsubscribe()
       }
    } , [] )


 const authInfo = {
    user,loading, signUp, signIn, logOut, userUpdateProfile
 }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;