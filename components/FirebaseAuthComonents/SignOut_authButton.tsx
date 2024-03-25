import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../../firebase.config'
import { useRouter } from 'next/navigation'
import './auth-button.scss'

const SignOut_authButton = () => {

    const router = useRouter()

    const signOutUser = async () => {
        // just sign out from account and return at Home
        try {
            await signOut(auth)
            router.push('/')
        }
        catch(error) {console.log(error)}
    }

    return (
        <button onClick={signOutUser} className='out-button'>
            Sing out
        </button>
    )
}

export default SignOut_authButton;