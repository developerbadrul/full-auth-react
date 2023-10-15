/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { getAuth, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // console.log(user);

    const signUpPassWord = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("After State Change", currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unSubscribe()
        }
    }, [])

    const authInfo = {
        signUpPassWord,
        signInPass,
        user,
        loading,
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