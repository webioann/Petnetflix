'use client'
import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../../firebase.config'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import './auth-button.scss'

const SignOut_authButton = () => {

    const router = useRouter()
    const { user } = useContext(UserContext)

    const signOutUser = async () => {
        // just sign out from account and return at Home
        try {
            await signOut(auth)
            router.push('/')
        }
        catch(error) {console.log(error)}
    }
    if( user ) {
        return (
            <button onClick={signOutUser} className='out-button'>
                Sing out
            </button>
        )
    }
    else return null
}

export default SignOut_authButton;