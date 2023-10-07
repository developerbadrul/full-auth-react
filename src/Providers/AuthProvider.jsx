/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { getAuth,GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
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

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = ()=>{
       return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("After State Change", currentUser);
            setUser(currentUser);
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        signUpPassWord,
        signInPass,
        user,
        logOut,
        googleSignIn,
        githubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;