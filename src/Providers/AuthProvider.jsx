/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const signUpPassWord = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("After State Change", currentUser);
            setUser(currentUser);
        }); 
        return ()=> unSubscribe();
    }, [])

    const authInfo = {
        signUpPassWord,
        signInPass,
        user,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;