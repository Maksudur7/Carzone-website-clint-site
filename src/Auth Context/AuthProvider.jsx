import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../FireBase/Firebase";
import PropTypes from 'prop-types';

export const AuthContext = createContext()

const Auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const [loding, setloding] = useState(true)

    const regster = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signin = (email, password) => {
        setloding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOut = () => {
        setloding(true)
        signOut(Auth)
    }
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(Auth, googleProvider)
    }
    const gitProvider = new GithubAuthProvider()
    const githubLogin = () => {
        return signInWithPopup(Auth, gitProvider)
    }
    const [users, serUsers] = useState(null)
    const [name, setName] = useState(null)
    const [photo, setPhoto] = useState(null)
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(Auth, user => {
            console.log(user)
            serUsers(user)
            setloding(false)
            setName(user.displayName)
            setPhoto(user.photoURL)
        })
        return () => {
            unSuscribe()
        }
    }, [])
    const profileAdnName = (name, Url) => {
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: Url
        })
    }


    const authInfo = {
        regster,
        signin,
        users,
        logOut,
        loding,
        name,
        photo,
        googleLogin,
        githubLogin,
        profileAdnName

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.object.isRequired
}

export default AuthProvider;