import React from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase.config'
import { IAuthButtonProps } from '../../types/auth.types'
import './auth-button.scss'

const SignUpWithEmail_authButton: React.FC<IAuthButtonProps> = ({ email, password, setWarning, setError }) => {

    const router = useRouter()

    const createUserAccount = async () => {
        // creating new user account with used email and password 
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            router.push('/browse')
        }
        catch(error){
            setWarning(true)
            //code get error message from server and to sliced from it "message" for showing in error report
            let message = 'Unknown Error'
            if (error instanceof Error) {
                let length = error.message.length
                let shortMessage = error.message.substring(error.message.indexOf("/") + 1, length - 2)
                let temp = shortMessage.replace(/-/g, " ")
                message = temp
            }
            setError(message)
        }
    }

    return (
        <button className='auth-button in-top' onClick={createUserAccount}>
            Sign Up with email
        </button>
    )
}

export default SignUpWithEmail_authButton;