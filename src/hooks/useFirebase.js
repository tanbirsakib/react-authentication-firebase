import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseAuthentication from "../Firebase/firebase.init";

initFirebaseAuthentication();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const signInWithGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            // console.log(result.user);
        })
        .catch(error => {
           setError(error.message);
        })
    }
    const logOut = () => {
        signOut(auth)
        .then(()=>{
            //sign out success
            setUser({});
        })
        .catch(error=>{
            // setError(error.message);
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
                // console.log("user on state changed", user);
            }
            else{
                //user is signed out
            }
        })
    }
        , [])
        // log out functon 
     
    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;