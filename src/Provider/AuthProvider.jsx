import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
   
    // create user
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //updateUser
  

    // login user
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut

    const logOutUser =()=>{
        setLoading(true)
        return signOut(auth)
        .then(()=>{
            alert('User LogOut Successfully')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    // observer
    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Observe', currentUser);
            setLoading(false);
        });

        return ()=>{
            unSubscribe();
        }

    }, []);

    const authInfo = {
        loading,
        user,
        createUser,
        loginUser,
        logOutUser,



    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;