import { createContext, useContext, useEffect, useState } from 'react';
//import Swal from 'sweetalert2';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import auth from '../Settings/ConfigFirebase';


export const ApiContext = createContext();

const ApiProvider = (props) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        alert("adios")
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <ApiContext.Provider 
            value={{ 
                createUser, 
                user, 
                logout, 
                signIn 
        }}>
            {props.children}
        </ApiContext.Provider>
    );
};
export default ApiProvider;