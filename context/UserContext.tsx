'use client'
import React, { useEffect, useState, createContext, ReactNode } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase.config'
import { signOut } from "firebase/auth"

interface IUser {
    name: string | null
    email: string | null
    user_id: string | null
    photoURL: string | null
}
type UserContextType = {
    user: IUser | null
}

export const UserContext = createContext<UserContextType>({  user: null })

const UserContextProvider = ({ children }: {children: ReactNode}) => {

    const [user, setUser] = useState<IUser | null>(null) 

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if( user ) {
                let extractNameWithBigFirstLetter;
                if( user.displayName === null && user.email) {
                    let extractName = user.email?.substring(0,user.email.indexOf('@'))
                    extractNameWithBigFirstLetter = extractName?.charAt(0).toUpperCase() + extractName?.slice(1)
                }
                else{
                    extractNameWithBigFirstLetter = user.displayName 
                }
                setUser({
                    name: extractNameWithBigFirstLetter,
                    email: user.email,
                    user_id: user.uid,
                    photoURL: user.photoURL,
                })
            }
            else{
                setUser(null)
            }
        })
        return () => {signOut(auth)}
    }, [auth])
    
    return (
        <UserContext.Provider value={{ user: user }}>
            { children }
        </UserContext.Provider>
    )
    
}

export default UserContextProvider;
